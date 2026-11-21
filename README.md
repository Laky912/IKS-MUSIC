# IKS MUSIC

Reproductor musical web ligero basado en el reproductor oficial de YouTube.

## Publicación

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/(root)`.
4. Guarda. La web se publica en https://laky912.github.io/IKS-MUSIC/.

## Búsqueda de música

La aplicación utiliza YouTube Data API v3. La clave compartida está configurada en `api-config.js`, por lo que los visitantes no tienen que introducir su propia clave ni configurar servicios adicionales.

**Aviso:** al usar GitHub Pages, cualquier clave incluida en el frontend es pública y puede ser copiada por cualquier visitante. La cuota gratuita de YouTube es compartida y puede agotarse. Restringe la clave en Google Cloud a **YouTube Data API v3** y al referente web `https://laky912.github.io/*`. Para pruebas locales, añade también `http://127.0.0.1:8787/*`. Si la clave ya fue compartida públicamente, revócala y crea otra cuando quieras proteger el consumo.

## Funciones

- Búsqueda de canciones, artistas y videos en YouTube.
- Reproductor oficial integrado en la página.
- Reproducción siguiente/anterior y salto automático cuando YouTube reporta un error de reproducción.
- Perfiles de Bad Bunny, Milo J y Fuerza Regida.
- Recomendaciones basadas en los artistas favoritos.
- Favoritos y playlists guardados en el navegador.
- Diseño adaptable a escritorio y móvil.
- Registro e inicio de sesión local de demostración.

## Límites importantes

- Algunos videos no permiten reproducción insertada, están restringidos por región o fueron eliminados. IKS MUSIC intenta saltar al siguiente cuando YouTube devuelve un error, pero no puede desbloquear videos restringidos.
- La API de búsqueda no entrega audio independiente: la música se reproduce dentro del reproductor oficial de YouTube.
- Favoritos, playlists, usuarios y sesión se guardan localmente en cada navegador; no se sincronizan entre visitantes ni dispositivos.
- El login actual es una demostración local, no una autenticación segura. Cualquier persona puede registrar el nombre `Laky912` en su propio navegador y el panel admin local no protege datos reales. No uses contraseñas reutilizadas.
- La API Key pública no debe considerarse secreta. Para una aplicación con clave privada, límites por usuario y cuentas compartidas se necesita un backend.

## Abrir en Windows

Ejecuta `INICIAR-WINDOWS.bat`. Se requiere Node.js instalado. La aplicación local se abre en `http://127.0.0.1:8787`.
