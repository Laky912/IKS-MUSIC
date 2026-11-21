# IKS MUSIC

Reproductor musical web basado en videos de YouTube.

## Publicar la web en GitHub Pages

1. En GitHub abre **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
4. La web quedará en https://laky912.github.io/IKS-MUSIC/.

## Búsqueda pública sin que cada visitante use su API Key

La web puede usar un Cloudflare Worker como proxy. La clave de YouTube se guarda como secreto en Cloudflare y nunca se incluye en el HTML ni en el repositorio.

1. Crea una cuenta gratuita en Cloudflare.
2. Instala Node.js y Wrangler en tu PC: `npm install -g wrangler`.
3. Desde la carpeta del proyecto, inicia sesión: `wrangler login`.
4. En esta carpeta ejecuta: `wrangler deploy`.
5. Configura el secreto: `wrangler secret put YOUTUBE_API_KEY` y pega tu YouTube Data API v3 key cuando Wrangler lo solicite.
6. Copia la URL del Worker que te muestra Cloudflare y pégala en `api-config.js`, en `window.IKS_API_BASE`.
7. Sube el cambio a GitHub. GitHub Pages publicará la versión nueva.

En Google Cloud restringe la clave por API y permite únicamente **YouTube Data API v3**. No la limites por HTTP referrer: la llamada a Google la hace el Worker.

## Importante

- Los visitantes no necesitan crear ni pegar una API Key.
- Las búsquedas de todos los visitantes consumen la cuota de una sola API Key central. La cuota de YouTube Data API es compartida y puede agotarse.
- La reproducción usa el reproductor oficial de YouTube; algunos videos pueden tener inserción deshabilitada, restricciones regionales o estar eliminados.
- Favoritos y playlists se guardan localmente en el navegador de cada visitante.
- No publiques nunca tu API Key en `index.html`, `api-config.js` ni en otros archivos del repositorio.
