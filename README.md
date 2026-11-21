# IKS MUSIC

Reproductor musical ligero para Windows y navegador, con **YouTube como única fuente musical**.

## Iniciar en Windows
1. Descarga el ZIP del repositorio y extrae la carpeta.
2. Ejecuta `INICIAR-WINDOWS.bat`.
3. En IKS MUSIC, abre **Configuración** y conecta tu clave de YouTube Data API v3.
4. Busca canciones, reproduce videos y guarda tus favoritos y playlists.

Necesitas Node.js para iniciar el servidor local. Si aún no lo tienes, instala la versión LTS desde https://nodejs.org/.

## Configurar YouTube (gratis)
1. Abre https://console.cloud.google.com/ y crea un proyecto.
2. Activa **YouTube Data API v3**: https://console.cloud.google.com/apis/library/youtube.googleapis.com
3. En Credenciales, crea una **API Key**.
4. Pega la clave dentro de IKS MUSIC, en Configuración, y pulsa **Guardar clave**.
5. Pulsa **Probar conexión**.

La clave se guarda en el almacenamiento local del navegador. No la publiques en GitHub ni la compartas. Si restringes la clave por sitio web, permite `http://127.0.0.1:8787/*` y limita su uso a YouTube Data API v3.

## Funciones
- Búsqueda de canciones, artistas y videos de YouTube.
- Reproducción integrada con el reproductor oficial de YouTube.
- Recomendaciones y exploración por géneros.
- Favoritos y playlists guardadas localmente.
- Controles de reproducción y avance/retroceso de la cola.

## Notas
- La búsqueda usa YouTube Data API v3 y está sujeta a la cuota gratuita de Google Cloud.
- Algunos videos pueden tener desactivada la reproducción integrada por decisión de su propietario.
- El video se reproduce dentro del reproductor oficial de YouTube; IKS MUSIC no descarga ni extrae audio.
- El consumo de recursos/FPS depende del equipo, navegador, resolución y video reproducido.
- Se necesita conexión a internet.

## Publicar en GitHub Pages
El reproductor usa el servidor local para su configuración y callback de reproducción. Para la experiencia recomendada en Windows, inicia con `INICIAR-WINDOWS.bat`.
