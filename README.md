# IKS MUSIC

Reproductor musical ligero para Windows y navegador.

## Iniciar en Windows
1. Instala Node.js LTS desde https://nodejs.org/ si aún no lo tienes.
2. Descarga este repositorio como ZIP y extrae la carpeta.
3. Ejecuta `INICIAR-WINDOWS.bat`.

Se abre una ventana de aplicación en Edge o Chrome y un servidor local ligero. Mantén la ventana de terminal abierta mientras uses el reproductor.

## Funciones
- Catálogo de canciones y recomendaciones mediante iTunes Search API (reproduce los avances disponibles).
- Búsqueda por canción o artista.
- Géneros, favoritos y playlists guardadas localmente.
- Radios online mediante Radio Browser.
- Controles de reproducción y volumen.

## Limitaciones
- iTunes proporciona avances, no el catálogo completo de canciones.
- Spotify aún no está conectado en esta versión. No introduzcas contraseñas ni claves secretas en este repositorio.
- El impacto en FPS depende del equipo, navegador y fuente de audio.
- La aplicación necesita internet para catálogo y radios.

## Publicar en GitHub Pages
En Settings → Pages, selecciona Deploy from a branch, rama `main`, carpeta `/ (root)`. La versión web estática se publicará automáticamente.
