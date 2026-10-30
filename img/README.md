# 10ª Ruta de la Tapa en Villaverde 2026 — mapa

Mapa de los **77 establecimientos** del folleto oficial (6, 7, 8 y 9 de noviembre de 2026 · Caña + Tapa: 3,00 €).

Web: https://miguelfn.github.io/img/

## Contenido

| Fichero | Para qué sirve |
|---|---|
| `index.html` + `bares.js` | Mapa interactivo para GitHub Pages: filtros por barrio, buscador, fotos, "Cómo llegar" (Google Maps), "Cerca de mí" y marcar bares visitados. |
| `ruta-tapa-villaverde-2026.kml` | Importar en **Google My Maps** (todos los bares, con fotos). |
| `kml/<barrio>.kml` | Un KML por barrio, por si quieres una capa por barrio en My Maps. |
| `ruta-tapa-villaverde-2026.csv` | Los mismos datos en tabla (Excel / Google Sheets / importación alternativa). |
| `bares.json` | Datos completos en JSON. |
| `*.jpg` | Fotos de cada tapa (`NN-nombre-tapa.jpg`) y de cada local (`NN-nombre-local.jpg`), más la portada. |

## Subir a GitHub Pages

Todo (web, datos y fotos) está en la carpeta `img/`. Súbela tal cual a la raíz del repositorio `miguelfn.github.io`, de modo que quede `img/...`.
Las fotos tienen que estar publicadas en `https://miguelfn.github.io/img/NN-nombre-tapa.jpg` **antes** de importar el KML,
porque Google My Maps descarga las fotos desde esas URLs.

## Crear el mapa en Google My Maps

1. Entra en https://www.google.com/mymaps → **Crear un mapa nuevo**. Ponle de título "Ruta de la Tapa Villaverde 2026".
2. En la capa "Capa sin nombre" pulsa **Importar** y sube `ruta-tapa-villaverde-2026.kml`.
   - Si quieres **una capa por barrio**: borra la capa por defecto y, para cada barrio, pulsa *Añadir capa* → *Importar* → `kml/<barrio>.kml` (5 capas).
3. Colores: en la capa, pulsa *Estilos uniformes* → *Agrupar lugares por* → **Barrio**, y asigna colores
   (sugeridos: Butarque morado `#8B5FBF`, Ciudad de los Ángeles mostaza `#D39A2C`, San Cristóbal verde `#4E9A47`,
   Villaverde Alto frambuesa `#C8366A`, Villaverde Bajo naranja `#C77735`). Elige el icono 🍺/🍴 si quieres.
4. Etiquetas: *Establecer etiquetas* → **name** para ver el número y nombre en el mapa.
5. **Compartir** → activa "Cualquier persona con el enlace puede verlo".

Cada punto muestra: tapa, descripción, dirección, teléfono, email y las fotos de la tapa y del local.

### Incrustar el mapa de My Maps en una web (opcional)

En My Maps: menú ⋮ → *Insertar en mi sitio web* → copia el `<iframe>` y pégalo donde quieras.

## Notas sobre los datos

- Transcritos del folleto PDF. La portada habla de 78 establecimientos, pero el folleto solo trae ficha de 77.
- Coordenadas obtenidas con el geocodificador oficial CartoCiudad (IGN) por número de portal.
  Algunos locales que comparten portal se han separado unos metros para que no se tapen en el mapa.
- Correcciones respecto al folleto: "C/ Berbena de la Paloma, 15" → *Avenida de la Verbena de la Paloma, 15*;
  "Avda. Crovilla, 59" → *Avenida de Orovilla, 59*.
- Datos tal como aparecen en el folleto (posibles erratas del original): Vinoteca La Torre y Mesón A Gaviotiña
  comparten dirección y teléfono; Veranda tiene el mismo teléfono que ambos; Bar Gato Negro y Bar La Plaza
  comparten teléfono y email; Kebab España y Noor Kebab comparten teléfono. El teléfono de Bendita no se lee en el folleto.
