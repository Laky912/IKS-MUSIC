const ALLOWED_ORIGINS = [
  "https://laky912.github.io",
];

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function json(data, status, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const headers = cors(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/search" || request.method !== "GET") {
      return json({ error: "Ruta no encontrada" }, 404, headers);
    }

    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return json({ error: "Origen no autorizado" }, 403, headers);
    }

    const q = (url.searchParams.get("q") || "").trim().slice(0, 120);
    if (!q) return json({ error: "Escribe qué música quieres buscar." }, 400, headers);
    if (!env.YOUTUBE_API_KEY) {
      return json({ error: "El servicio de búsqueda todavía no está configurado." }, 503, headers);
    }

    // Cachear búsquedas repetidas para ahorrar cuota de YouTube.
    const cacheKey = new Request(url.toString(), { method: "GET" });
    const cached = await caches.default.match(cacheKey);
    if (cached) {
      const response = new Response(cached.body, cached);
      Object.entries(headers).forEach(([k, v]) => response.headers.set(k, v));
      return response;
    }

    const yt = new URL("https://www.googleapis.com/youtube/v3/search");
    yt.searchParams.set("part", "snippet");
    yt.searchParams.set("type", "video");
    yt.searchParams.set("videoEmbeddable", "true");
    yt.searchParams.set("maxResults", "24");
    yt.searchParams.set("safeSearch", "moderate");
    yt.searchParams.set("q", q);
    yt.searchParams.set("key", env.YOUTUBE_API_KEY);

    try {
      const upstream = await fetch(yt.toString());
      const data = await upstream.json();
      if (!upstream.ok) {
        return json({ error: data?.error?.message || "YouTube no pudo completar la búsqueda." }, upstream.status, headers);
      }

      const items = (data.items || [])
        .filter(item => item.id && item.id.videoId)
        .map(item => ({
          id: item.id.videoId,
          title: item.snippet?.title || "Video de YouTube",
          channel: item.snippet?.channelTitle || "YouTube",
          thumb: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || "",
        }));

      const response = json({ items }, 200, {
        ...headers,
        "Cache-Control": "public, max-age=60",
      });
      ctx.waitUntil(caches.default.put(cacheKey, response.clone()));
      return response;
    } catch {
      return json({ error: "No se pudo conectar con YouTube. Inténtalo de nuevo." }, 502, headers);
    }
  },
};
