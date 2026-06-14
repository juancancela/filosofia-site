# AGENTS.md — Sync de contenido: filosofia → filosofia-site

> Fuente de verdad para agentes que publican material nuevo del repo `filosofia` en el sitio web Astro desplegado en Vercel.

---

## 1. Que es cada repo

| Repo | Ruta local | Rol |
|---|---|---|
| **filosofia** | `/Users/jcancela/Documents/education/filosofia` | Contenido fuente: PDFs, audios, notas de clase, parciales. El alumno commitea aca primero. |
| **filosofia-site** | `/Users/jcancela/Documents/education/filosofia-site` | Sitio Astro + Tailwind. Copia el contenido a `public/content/` y lo expone con metadata en TypeScript. |

El sitio **no** lee el repo `filosofia` en runtime (salvo en dev local con sync). En Vercel el contenido va **commiteado** en `public/content/`.

---

## 2. Estructura de contenido en `filosofia`

```
filosofia/
├── clases/clase_N/           # Notas markdown del alumno (opcional)
├── contenido/
│   ├── autores/<autor>/      # Textos fuente + material_generado/
│   └── clases/clase_N/       # Material del docente (PDFs, etc.)
└── parciales/<parcial>/      # Contenido de parciales + material_generado/
```

Convenciones de carpetas de autores: `jean_paul_sartre`, `friedrich_nietzsche`, `eudeba`, etc. (snake_case).

Material generado (resumenes, audios, debates) va en `material_generado/` dentro de cada autor o parcial.

---

## 3. Workflow completo (paso a paso)

### Paso 0 — El usuario agrega contenido en `filosofia`

El alumno commitea y pushea en `filosofia`. **Siempre mirar el ultimo commit** antes de tocar el site:

```bash
cd /Users/jcancela/Documents/education/filosofia
git fetch origin
git log origin/main -1 --stat
```

Identificar que cambio: autor nuevo, clase nueva, material generado, parcial, etc.

### Paso 1 — Actualizar metadata en `filosofia-site`

Editar segun corresponda:

| Tipo de contenido | Archivo a editar |
|---|---|
| Autor nuevo o material generado de autor | `src/data/content.ts` → array `authorDefinitions` |
| Clase nueva o material de clase | `src/data/content.ts` → array `clases` |
| Parcial (contenido, preguntas, material) | `src/data/parciales.ts` |

**Patron para autores** (`authorDefinitions`):

```typescript
{
  id: 'jean-paul-sartre',           // kebab-case, URL del sitio
  name: 'Sartre',
  fullName: 'Jean-Paul Sartre',
  years: '1905 – 1980',
  image: 'https://upload.wikimedia.org/...',  // opcional
  bio: '...',
  works: [
    { title: 'Titulo legible', path: '/content/autores/jean_paul_sartre/archivo.pdf' },
  ],
  generated: [
    { title: 'Resumen (PDF)', type: 'pdf', path: '/content/autores/jean_paul_sartre/material_generado/..._resumen.pdf' },
    { title: 'Resumen (audio)', type: 'audio', path: '.../..._resumen.m4a' },
  ],
},
```

**Patron para clases** (`clases`):

```typescript
{
  number: 10,
  title: 'Nietzsche — Fragmentos',
  description: '...',
  notes: '/content/clases-notas/clase_10/clase_10.md',  // solo si existe en filosofia/clases/
  materials: [
    { title: 'Nietzsche (fragmentos)', type: 'pdf', path: '/content/clases/clase_10/Nietzsche (fragmentos).pdf' },
  ],
},
```

**Descubrimiento automatico**: `withDiscoveredAuthorMaterials()` en `content.ts` agrega archivos en `material_generado/` que no esten listados, pero con titulos feos (derivados del filename). **Siempre agregar entradas curadas** para titulos legibles en espanol.

**Paths**: todos empiezan con `/content/...` y deben coincidir con la ruta post-sync en `public/content/...`.

### Paso 2 — Sincronizar archivos con rsync

Desde `filosofia-site`:

```bash
cd /Users/jcancela/Documents/education/filosofia-site
FILOSOFIA_REPO_PATH=/Users/jcancela/Documents/education/filosofia bash scripts/prebuild.sh
```

El script (`scripts/prebuild.sh`) copia:

- `filosofia/contenido/autores/` → `public/content/autores/`
- `filosofia/contenido/clases/` → `public/content/clases/`
- `filosofia/clases/` → `public/content/clases-notas/`
- `filosofia/parciales/` → `public/content/parciales/`

Usa `rsync -av --delete` (incremental; solo archivos nuevos o modificados).

> **Nota**: si el script dice *"Filosofia repo not available"*, usar `FILOSOFIA_REPO_PATH` con ruta absoluta como arriba. El default `../filosofia` a veces falla segun el cwd.

Atajo npm (sync + commit generico + push):

```bash
npm run sync
```

Ese comando commitea con mensaje fijo `Sync contenido desde filosofia`. Preferir commit manual con mensaje descriptivo cuando hay cambios en `content.ts` / `parciales.ts`.

### Paso 3 — Commit y push en `filosofia-site`

```bash
cd /Users/jcancela/Documents/education/filosofia-site
git add -A
git status   # verificar: public/content/ + src/data/*.ts + AGENTS.md si aplica
git commit -m "Sync Sartre y clase 10 Nietzsche desde filosofia"
git push
```

Vercel redeploya automaticamente al pushear `main`.

### Paso 4 — Verificar (opcional)

```bash
npm run build    # debe compilar sin errores
npm run dev      # revisar autor/clase/parcial en localhost:4321
```

---

## 4. Checklist rapido

- [ ] Leer ultimo commit en `filosofia` (`git log origin/main -1 --stat`)
- [ ] Listar archivos nuevos en disco (`ls contenido/autores/...`, `contenido/clases/...`)
- [ ] Actualizar `src/data/content.ts` y/o `src/data/parciales.ts`
- [ ] Correr `prebuild.sh` con `FILOSOFIA_REPO_PATH` absoluto
- [ ] Confirmar que los archivos aparecen en `public/content/`
- [ ] Commit descriptivo + push a `filosofia-site`
- [ ] (Opcional) `npm run build` local

---

## 5. Casos especiales

### Parciales

Los parciales tienen pagina dedicada (`src/pages/parcial/[id].astro`) y metadata extensa en `src/data/parciales.ts`: temas, contenidos docente, material generado, preguntas del examen con respuestas y referencias. Ver commit `25a2c29` como referencia.

Los PDFs y audios del parcial viven en `filosofia/parciales/<id>/` y se sincronizan a `public/content/parciales/<id>/`. A veces hay copias con nombres cortos en `material_generado/` (ej. `relecturas_eudeba_cap_5_hume_resumen.pdf`).

### Eudeba / Relecturas

Autor editorial en `contenido/autores/eudeba/`. Cada capitulo suele tener resumen PDF + audio(s). Caps. 7-8 (Hegel, Nietzsche) tienen audio en **dos partes** (`_resumen_1.m4a`, `_resumen_2.m4a`) sin "textos seleccionados".

### Clase con material generado inline

Ejemplo: clase 7 (Descartes) mezcla PDF del docente, material generado en `clase_7/material_generado/` y grabaciones en `clases-notas/clase_7/part_*.mp3`. Todos se referencian en el array `materials` de la clase.

### Solo actualizacion de PDF existente

Si el commit solo reemplaza un PDF (ej. Relecturas completo), basta con rsync + commit. No hace falta tocar `content.ts` si los paths no cambiaron.

---

## 6. Archivos clave del site

| Archivo | Proposito |
|---|---|
| `scripts/prebuild.sh` | Rsync desde `filosofia` |
| `src/data/content.ts` | Autores, clases, tipos `Author` / `Clase` / `Material` |
| `src/data/parciales.ts` | Metadata del primer parcial (y futuros) |
| `public/content/` | Contenido estatico servido por Astro/Vercel |
| `package.json` → `npm run sync` | Atajo: prebuild + commit + push |

---

## 7. Anti-patrones

- No editar archivos en `public/content/` a mano sin tener la copia en `filosofia` (el repo fuente pierde sync).
- No olvidar `content.ts` / `parciales.ts`: el rsync copia archivos pero el sitio no los muestra sin metadata.
- No usar paths relativos sin `/content/` prefix en la metadata.
- No asumir que `../filosofia` funciona: usar ruta absoluta en `FILOSOFIA_REPO_PATH` si falla el sync.
- No pushear solo `content.ts` sin correr prebuild: Vercel no tiene acceso al repo `filosofia` en build time.

---

## 8. Ejemplo reciente

Commit en `filosofia`: `d24793d` — *agregado sartre y resumenes*

- Nuevo autor: `contenido/autores/jean_paul_sartre/` (PDF + resumen PDF/audio + opinion audio)
- Nueva clase: `contenido/clases/clase_10/Nietzsche (fragmentos).pdf`
- PDF Relecturas Eudeba actualizado

Acciones en `filosofia-site`:

1. Entrada `jean-paul-sartre` en `authorDefinitions`
2. Entrada `clase 10` en `clases`
3. `prebuild.sh` + commit `Sync Sartre y clase 10 Nietzsche desde filosofia` + push
