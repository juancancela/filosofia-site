import { existsSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

export interface Material {
  title: string;
  type: 'pdf' | 'audio' | 'video' | 'markdown' | 'image';
  path: string;
  label?: string;
  source?: 'docente' | 'generado';
  origin?: string;
}

export interface Author {
  id: string;
  name: string;
  fullName: string;
  years: string;
  image?: string;
  bio: string;
  works: { title: string; path: string }[];
  generated: Material[];
}

export interface Clase {
  number: number;
  title: string;
  description: string;
  notes?: string;
  materials: Material[];
}

export interface ParcialReference {
  source: 'docente' | 'generado';
  document: string;
  pages?: string;
  path?: string;
}

export interface ParcialQuestion {
  number: number;
  question: string;
  inScope: boolean;
  scopeNote?: string;
  answer: string;
  references: ParcialReference[];
}

export interface ParcialTopic {
  author: string;
  detail: string;
}

export interface Parcial {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  topics: ParcialTopic[];
  contents: Material[];
  generated: Material[];
  example: { title: string; path: string };
  exam: {
    header: string;
    date: string;
    sede: string;
    instructions: string;
    questions: ParcialQuestion[];
  };
}

const generatedTypeByExtension: Record<string, Material['type'] | undefined> = {
  '.md': 'markdown',
  '.m4a': 'audio',
  '.mp3': 'audio',
  '.mp4': 'video',
  '.pdf': 'pdf',
  '.png': 'image',
  '.jpg': 'image',
  '.jpeg': 'image',
  '.webp': 'image',
};

function pathExistsInPublic(path: string) {
  if (!path.startsWith('/content/')) return true;
  return existsSync(join(process.cwd(), 'public', path.slice(1)));
}

function authorFolder(author: Author) {
  const knownPath = [...author.works.map((work) => work.path), ...author.generated.map((material) => material.path)]
    .find((path) => path.startsWith('/content/autores/'));
  const match = knownPath?.match(/^\/content\/autores\/([^/]+)/);

  return match?.[1] ?? author.id.replaceAll('-', '_');
}

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function withDiscoveredAuthorMaterials(author: Author): Author {
  const folder = authorFolder(author);
  const generatedDir = join(process.cwd(), 'public', 'content', 'autores', folder, 'material_generado');
  const curated = author.generated.filter((material) => pathExistsInPublic(material.path));
  const seenPaths = new Set(curated.map((material) => material.path));

  if (!existsSync(generatedDir)) {
    return { ...author, generated: curated };
  }

  const discovered = readdirSync(generatedDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const type = generatedTypeByExtension[extname(entry.name).toLowerCase()];
      if (!type) return undefined;

      return {
        title: titleFromFilename(entry.name),
        type,
        path: `/content/autores/${folder}/material_generado/${entry.name}`,
      };
    })
    .filter((material): material is Material => Boolean(material))
    .filter((material) => !seenPaths.has(material.path))
    .sort((a, b) => a.path.localeCompare(b.path, 'es', { numeric: true, sensitivity: 'base' }));

  return { ...author, generated: [...curated, ...discovered] };
}

export const clases: Clase[] = [
  {
    number: 1,
    title: '¿Que es la filosofia?',
    description: 'Etimologia griega, las tres figuras del saber (sabio, sofista, filosofo), el Banquete de Platon y Eros, la mayeutica socratica, el paso del mito al logos, y el debate sobre la utilidad de la filosofia.',
    notes: '/content/clases-notas/clase_1/clase_1.md',
    materials: [
      { title: '¿Que es la filosofia? (fragmentos)', type: 'pdf', path: '/content/clases/clase_1/que_es_la_filosofia_en_fragmentos.pdf' },
    ],
  },
  {
    number: 2,
    title: 'Karl Jaspers — ¿Que es la filosofia?',
    description: 'Los dos primeros capitulos de La filosofia desde el punto de vista de la existencia: filosofia vs ciencia, el triple origen del filosofar (admiracion, duda, situaciones limite) y la comunicacion como horizonte decisivo.',
    materials: [
      { title: 'La filosofia, caps. 1-2 (Jaspers)', type: 'pdf', path: '/content/clases/clase_2/la_filosofia_cap_1_2_karl_jaspers.pdf' },
    ],
  },
  {
    number: 3,
    title: 'Jean-Pierre Vernant y la polis griega',
    description: 'El nacimiento del pensamiento racional en el marco de la polis griega. Vernant, Los origenes del pensamiento griego, cap. IV y el universo espiritual de la polis.',
    materials: [
      { title: 'Vernant — Los origenes del pensamiento, cap. IV', type: 'pdf', path: '/content/clases/clase_3/Vernant - Los origenes del pensamiento - Cap. IV .pdf' },
      { title: 'Glosario — El universo espiritual de la polis', type: 'pdf', path: '/content/clases/clase_3/Glosario El universo espiritual de la polis. J. P. Vernant.pdf' },
    ],
  },
  {
    number: 4,
    title: 'William Guthrie y los filosofos griegos',
    description: 'Introduccion a Los filosofos griegos de W.K.C. Guthrie: el desarrollo del pensamiento griego desde los presocraticos hasta Aristoteles.',
    materials: [
      { title: 'Guthrie — Los filosofos griegos', type: 'pdf', path: '/content/clases/clase_4/W-K-C-Guthrie-Los-filosofos-griegos.pdf' },
    ],
  },
  {
    number: 5,
    title: 'Relecturas — Claves hermeneuticas para la comprension de textos filosoficos',
    description: 'Herramientas hermeneuticas para leer y comprender textos filosoficos: contexto historico, intertextualidad, niveles de lectura y estrategias interpretativas.',
    materials: [
      { title: 'Relecturas — Claves hermeneuticas', type: 'pdf', path: '/content/clases/clase_5/Relecturas. Claves hermenéuticas para la comprensión de textos filosóficos.pdf' },
    ],
  },
  {
    number: 6,
    title: 'Descartes — Relecturas hermeneuticas',
    description: 'Analisis hermeneutico del pensamiento cartesiano: el metodo de la duda, el cogito, las Meditaciones metafisicas y textos seleccionados.',
    materials: [
      { title: 'Relecturas — Claves hermeneuticas', type: 'pdf', path: '/content/clases/clase_6/Relecturas. Claves hermenéuticas para la comprensión de textos filosóficos.pdf' },
    ],
  },
  {
    number: 7,
    title: 'Descartes — Como invento la mente moderna',
    description: 'Lectura complementaria sobre el cogito cartesiano: como la metafisica de Descartes establece la separacion entre la cosa pensante (res cogitans) y la cosa extensa (res extensa), y por que esa division todavia configura nuestra concepcion moderna de la mente.',
    materials: [
      { title: 'Como Descartes invento la mente moderna', type: 'pdf', path: '/content/clases/clase_7/material_generado/como_descartes_invento_la_menter_moderna.pdf' },
      { title: 'Resumen en video', type: 'video', path: '/content/clases/clase_7/material_generado/como_descartes_invento_la_menter_moderna_resumen_video.mp4' },
      { title: 'Resumen en audio', type: 'audio', path: '/content/clases/clase_7/material_generado/como_descartes_invento_la_menter_moderna_resumen_audio.m4a' },
      { title: 'Descartes', type: 'image', path: '/content/clases/clase_7/material_generado/descartes.png' },
      { title: 'Portada — Como Descartes invento la mente moderna', type: 'image', path: '/content/clases/clase_7/material_generado/como_descartes_invento_la_menter_moderna.png' },
      { title: 'Grabacion de la clase — Parte 1', type: 'audio', path: '/content/clases-notas/clase_7/part_1.mp3' },
      { title: 'Grabacion de la clase — Parte 2', type: 'audio', path: '/content/clases-notas/clase_7/part_2.mp3' },
      { title: 'Grabacion de la clase — Parte 3', type: 'audio', path: '/content/clases-notas/clase_7/part_3.mp3' },
      { title: 'Grabacion de la clase — Parte 4', type: 'audio', path: '/content/clases-notas/clase_7/part_4.mp3' },
    ],
  },
  {
    number: 10,
    title: 'Nietzsche — Fragmentos',
    description: 'Fragmentos sobre el pensamiento de Friedrich Nietzsche: critica de la moral, del cristianismo y de la metafisica; el filosofo como creador de valores y el filosofar a martillazos.',
    materials: [
      { title: 'Nietzsche (fragmentos)', type: 'pdf', path: '/content/clases/clase_10/Nietzsche (fragmentos).pdf' },
    ],
  },
];

const authorDefinitions: Author[] = [
  {
    id: 'platon',
    name: 'Platon',
    fullName: 'Platon',
    years: 'c. 428 – 348 a.C.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/120px-Plato_Silanion_Musei_Capitolini_MC1377.png',
    bio: 'Filosofo ateniense, discipulo de Socrates y maestro de Aristoteles. Fundo la Academia, la primera institucion de educacion superior del mundo antiguo. En La Republica construye el modelo de una ciudad justa donde los gobernantes deben ser filosofos.',
    works: [
      { title: 'La Republica', path: '/content/autores/platon/la_republica_platon.pdf' },
    ],
    generated: [
      ...Array.from({ length: 10 }, (_, i) => [
        { title: `La Republica — Libro ${i + 1} (resumen)`, type: 'pdf' as const, path: `/content/autores/platon/material_generado/la_republica_platon_libro_${i + 1}_resumen.pdf` },
        { title: `La Republica — Libro ${i + 1} (audio)`, type: 'audio' as const, path: `/content/autores/platon/material_generado/la_republica_platon_libro_${i + 1}_resumen.m4a` },
      ]).flat(),
      { title: 'Mapa mental de La Republica', type: 'image', path: '/content/autores/platon/material_generado/la_republica_platon_mapmind.png' },
    ],
  },
  {
    id: 'aristoteles',
    name: 'Aristoteles',
    fullName: 'Aristoteles',
    years: '384 – 322 a.C.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/120px-Aristotle_Altemps_Inv8575.jpg',
    bio: 'Discipulo de Platon y fundador del Liceo. En la Metafisica formula que la filosofia nace del asombro (thaumazein) y es la ciencia mas libre porque no se busca por ninguna utilidad.',
    works: [
      { title: 'Metafisica', path: '/content/autores/aristoteles/metafisica_aristoteles.pdf' },
    ],
    generated: [],
  },
  {
    id: 'friedrich-hegel',
    name: 'Hegel',
    fullName: 'Georg Wilhelm Friedrich Hegel',
    years: '1770 – 1831',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jakob_Schlesinger_-_Hegel_1831.jpg/120px-Jakob_Schlesinger_-_Hegel_1831.jpg',
    bio: 'Figura central del idealismo aleman. Concibe la realidad como un proceso dialectico. En la Enciclopedia de las ciencias filosoficas presenta la filosofia como contemplacion pensante de los objetos.',
    works: [
      { title: 'Enciclopedia de las ciencias filosoficas', path: '/content/autores/friedrich_hegel/enclopedia_de_las_ciencias_filosoficas_friedrich_hegel.pdf' },
    ],
    generated: [],
  },
  {
    id: 'karl-marx',
    name: 'Marx',
    fullName: 'Karl Marx',
    years: '1818 – 1883',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored_%26_Adjusted_%283x4_cropped_b%29.png/120px-Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored_%26_Adjusted_%283x4_cropped_b%29.png',
    bio: 'Filosofo, economista y revolucionario. En la celebre Tesis XI sobre Feuerbach: "Los filosofos no han hecho mas que interpretar de diversos modos el mundo, pero de lo que se trata es de transformarlo."',
    works: [
      { title: 'Tesis sobre Feuerbach', path: '/content/autores/karl_marx/tesis_sobre_feueerbach_karl_marx.pdf' },
    ],
    generated: [
      { title: 'Resumen de las Tesis sobre Feuerbach', type: 'pdf', path: '/content/autores/karl_marx/tesis_sobre_feueerbach_karl_marx_resumen.pdf' },
    ],
  },
  {
    id: 'friedrich-nietzsche',
    name: 'Nietzsche',
    fullName: 'Friedrich Nietzsche',
    years: '1844 – 1900',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/120px-Nietzsche187a.jpg',
    bio: 'Filologo clasico y filosofo radical. Introduce el filosofar a martillazos: golpear los idolos para escuchar si suenan huecos. Define al filosofo como un creador de valores.',
    works: [
      { title: 'Mas alla del bien y del mal', path: '/content/autores/friedrich_nietzsche/mas_alla_del_bien_y_el_mal_friedrich_nietzsche.pdf' },
      { title: 'Como se filosofa a martillazos', path: '/content/autores/friedrich_nietzsche/como_se_filosofa_a_martillazos__friedrich_nietzsche.pdf' },
    ],
    generated: [
      { title: 'Resumen de Mas alla del bien y del mal', type: 'pdf', path: '/content/autores/friedrich_nietzsche/mas_alla_del_bien_y_el_mal_friedrich_nietzsche_resumen.pdf' },
      ...Array.from({ length: 9 }, (_, i) => ({
        title: `Mas alla del bien y del mal — Seccion ${i + 1} (debate)`,
        type: 'audio' as const,
        path: `/content/autores/friedrich_nietzsche/mas_alla_del_bien_y_el_mal_seccion_${i + 1}_friedrich_nietzsche_debate.m4a`,
      })),
    ],
  },
  {
    id: 'karl-jaspers',
    name: 'Jaspers',
    fullName: 'Karl Jaspers',
    years: '1883 – 1969',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Karl_Jaspers_1946.jpg/120px-Karl_Jaspers_1946.jpg',
    bio: 'Psiquiatra y filosofo existencialista. Identifica un triple origen del filosofar: el asombro, la duda y las situaciones limite (muerte, sufrimiento, lucha, culpa). El cuarto horizonte es la comunicacion.',
    works: [
      { title: 'La filosofia desde el punto de vista de la existencia', path: '/content/autores/karl_jaspers/la_filosofia_desde_el_punto_de_vista_de_la_existencia_karl_jaspers.pdf' },
    ],
    generated: [
      { title: 'Resumen caps. 1-2', type: 'markdown', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_cap_1_to_2_resumen.md' },
      { title: 'Resumen completo', type: 'pdf', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_resumen_completo.pdf' },
      { title: 'Presentacion general', type: 'pdf', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_presentacion.pdf' },
      { title: 'Debate caps. 1-2', type: 'audio', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_cap_1_to_2_debate.m4a' },
      { title: 'Debate caps. 3-7', type: 'audio', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_cap_3_to_7_debate.m4a' },
      { title: 'Video — Lo circunvalante', type: 'video', path: '/content/autores/karl_jaspers/material_generado/la_filosofia_karl_jaspers_lo_circunvalante_resumen_video.mp4' },
    ],
  },
  {
    id: 'jean-pierre-vernant',
    name: 'Vernant',
    fullName: 'Jean-Pierre Vernant',
    years: '1914 – 2007',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jean-Pierre_Vernant_%28Aubervilliers_2006%29.jpg/120px-Jean-Pierre_Vernant_%28Aubervilliers_2006%29.jpg',
    bio: 'Historiador y antropologo frances. En Los origenes del pensamiento griego muestra que la filosofia surge como producto de la polis: el espacio publico de debate permite el paso del mito al logos.',
    works: [
      { title: 'Los origenes del pensamiento griego', path: '/content/autores/jean_pierre_vernant/los_origenes_del_pensamiento_griego_vernant.pdf' },
    ],
    generated: [
      { title: 'Resumen cap. 5 (PDF)', type: 'pdf', path: '/content/autores/jean_pierre_vernant/material_generado/los_origenes_del_pensamiento_griego_vernant_cap_5_resumen.pdf' },
      { title: 'Resumen cap. 5 (audio)', type: 'audio', path: '/content/autores/jean_pierre_vernant/material_generado/los_origenes_del_pensamiento_griego_vernant_cap_5_resumen.m4a' },
    ],
  },
  {
    id: 'gilles-deleuze',
    name: 'Deleuze',
    fullName: 'Gilles Deleuze',
    years: '1925 – 1995',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/AVT_Gilles-Deleuze_6342.webp/120px-AVT_Gilles-Deleuze_6342.webp.png',
    bio: 'Filosofo frances. Presenta la filosofia como empresa de desmitificacion: "Una filosofia que no entristece o no contraria a nadie no es una filosofia."',
    works: [
      { title: 'Nietzsche y la filosofia', path: '/content/autores/gilles_delleuze/nietzsche_y_la_filosofia_gilles_delleuze.pdf' },
    ],
    generated: [],
  },
  {
    id: 'michel-foucault',
    name: 'Foucault',
    fullName: 'Michel Foucault',
    years: '1926 – 1984',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Photo_of_Michel_Foucault_on_1970_dustjacket_of_The_Order_of_Things.jpg/120px-Photo_of_Michel_Foucault_on_1970_dustjacket_of_The_Order_of_Things.jpg',
    bio: 'Filosofo e historiador. Redefine la filosofia como el trabajo critico del pensamiento sobre si mismo: no se trata de acumular conocimientos sino de preguntarse ¿puedo pensar de otro modo?',
    works: [
      { title: 'Historia de la sexualidad — Tomo 1', path: '/content/autores/michel_foucault/historia_de_la_sexualidad_tomo_1_michel_foucault.pdf' },
      { title: 'Historia de la sexualidad — Tomo 2', path: '/content/autores/michel_foucault/historia_de_la_sexualidad_tomo_2_michel_foucault.pdf' },
      { title: 'Historia de la sexualidad — Tomo 3', path: '/content/autores/michel_foucault/historia_de_la_sexualidad_tomo_3_michel_foucault.pdf' },
      { title: 'Historia de la sexualidad — Tomo 4', path: '/content/autores/michel_foucault/historia_de_la_sexualidad_tomo_4_michel_foucault.pdf' },
    ],
    generated: [],
  },
  {
    id: 'giorgio-agamben',
    name: 'Agamben',
    fullName: 'Giorgio Agamben',
    years: '1942 –',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Agamben.png/120px-Agamben.png',
    bio: 'Filosofo italiano. En ¿Que es lo contemporaneo? formula: ser contemporaneo no es coincidir con su tiempo, sino estar en desfasaje con el. El filosofo es siempre intempestivo.',
    works: [
      { title: '¿Que es lo contemporaneo?', path: '/content/autores/giorgio_agamben/que_es_lo_contemporaneo_giorgio_agamben.pdf' },
    ],
    generated: [],
  },
  {
    id: 'jean-paul-sartre',
    name: 'Sartre',
    fullName: 'Jean-Paul Sartre',
    years: '1905 – 1980',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flickr_-_Government_Press_Office_%28GPO%29_-_Jean_Paul_Sartre_and_Simone_De_Beauvoir_welcomed_by_Avraham_Shlonsky_and_Leah_Goldberg_%28cropped%29.jpg',
    bio: 'Filosofo, novelista y dramaturgo frances, figura central del existencialismo. En El existencialismo es un humanismo defiende que la existencia precede a la esencia: el hombre no tiene naturaleza fija sino que se define por sus actos y elecciones, en plena libertad y responsabilidad.',
    works: [
      { title: 'El existencialismo es un humanismo', path: '/content/autores/jean_paul_sartre/el_existencialismo_es_un_humanismo_sartre.pdf' },
    ],
    generated: [
      { title: 'Notas de estudio — Sartre (markdown)', type: 'markdown', path: '/content/autores/jean_paul_sartre/notas_sastre.md' },
      { title: 'El existencialismo es un humanismo — Resumen (PDF)', type: 'pdf', path: '/content/autores/jean_paul_sartre/material_generado/el_existencialismo_es_un_humanismo_sartre_resumen.pdf' },
      { title: 'El existencialismo es un humanismo — Resumen (audio)', type: 'audio', path: '/content/autores/jean_paul_sartre/material_generado/el_existencialismo_es_un_humanismo_sartre_resumen.m4a' },
      { title: 'El existencialismo es un humanismo — Opinion (audio)', type: 'audio', path: '/content/autores/jean_paul_sartre/material_generado/el_existencialismo_es_un_humanismo_sartre_opinion.m4a' },
    ],
  },
  {
    id: 'immanuel-kant',
    name: 'Kant',
    fullName: 'Immanuel Kant',
    years: '1724 – 1804',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/120px-Immanuel_Kant_%28painted_portrait%29.jpg',
    bio: 'Filosofo prusiano, figura central de la Ilustracion. En la Critica de la razon pura opera su "revolucion copernicana": son los objetos los que deben regirse por las condiciones del sujeto cognoscente, no al reves. Distingue fenomeno (la cosa tal como se nos aparece) de noumeno (la cosa en si, pensable pero no conocible).',
    works: [],
    generated: [
      { title: 'Notas de estudio — Kant (markdown)', type: 'markdown', path: '/content/autores/immanuel_kant/notas_kand.md' },
    ],
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Beauvoir',
    fullName: 'Simone de Beauvoir',
    years: '1908 – 1986',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Simone_de_Beauvoir2.png/120px-Simone_de_Beauvoir2.png',
    bio: 'Filosofa, escritora y figura central del existencialismo y del feminismo. En El segundo sexo formula que "no se nace mujer, se llega a serlo": la mujer no se define por una esencia natural ni por el "eterno femenino", sino por una situacion historica y social que la constituyo como Alteridad, como lo Otro frente al varon-Sujeto.',
    works: [
      { title: 'El segundo sexo', path: '/content/autores/simone_de_beauvoiir/el_segundo_sexo.pdf' },
    ],
    generated: [],
  },
  {
    id: 'william-guthrie',
    name: 'Guthrie',
    fullName: 'William Keith Chambers Guthrie',
    years: '1906 – 1981',
    image: 'https://live.staticflickr.com/65535/51022404937_b29cc06f83_c.jpg',
    bio: 'Filologo clasico y helenista escoces. Su obra Los filosofos griegos ofrece una introduccion accesible al desarrollo del pensamiento griego desde los presocraticos hasta Aristoteles.',
    works: [
      { title: 'Los filosofos griegos', path: '/content/autores/william_guthrie/los_filosofos_griegos_guthrie.pdf' },
      { title: 'Historia de la filosofia', path: '/content/autores/william_guthrie/historia_de_la_filosofia.pdf' },
    ],
    generated: [
      ...Array.from({ length: 8 }, (_, i) => [
        { title: `Los filosofos griegos — Cap. ${i + 1} (resumen)`, type: 'pdf' as const, path: `/content/autores/william_guthrie/material_generado/los_filosofos_griegos_guthrie_cap_${i + 1}_resumen.pdf` },
        { title: `Los filosofos griegos — Cap. ${i + 1} (audio)`, type: 'audio' as const, path: `/content/autores/william_guthrie/material_generado/los_filosofos_griegos_guthrie_cap_${i + 1}_resumen.m4a` },
      ]).flat(),
    ],
  },
  {
    id: 'eudeba',
    name: 'Eudeba',
    fullName: 'Editorial Universitaria de Buenos Aires',
    years: '1958 –',
    bio: 'Editorial de la Universidad de Buenos Aires. Relecturas ofrece claves hermeneuticas para la comprension de textos filosoficos: herramientas de lectura critica, contextualizacion historica y estrategias interpretativas.',
    works: [
      { title: 'Relecturas — Claves hermeneuticas', path: '/content/autores/eudeba/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf' },
    ],
    generated: [
      { title: 'Relecturas — Cap. 1: Platon (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_1_platon_resumen.pdf' },
      { title: 'Relecturas — Cap. 1: Platon textos seleccionados', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_1_platon_textos_seleccionados.pdf' },
      { title: 'Relecturas — Cap. 4: Descartes (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_4_descartes_resumen.pdf' },
      { title: 'Relecturas — Cap. 4: Descartes textos seleccionados', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_4_descartes_textos_seleccionados.pdf' },
      { title: 'Relecturas — Cap. 5: Hume (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_5_hume_resumen.pdf' },
      { title: 'Relecturas — Cap. 5: Hume textos seleccionados', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_5_hume_textos_seleccionados.pdf' },
      { title: 'Relecturas — Cap. 6: Kant (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_6_kant_resumen.pdf' },
      { title: 'Relecturas — Cap. 6: Kant textos seleccionados', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_6_kant_textos_seleccionados.pdf' },
      { title: 'Relecturas — Cap. 7: Hegel (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_7_hegel_resumen.pdf' },
      { title: 'Relecturas — Cap. 8: Nietzsche (resumen)', type: 'pdf', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_8_nietzche_resumen.pdf' },
      { title: 'Relecturas — Cap. 1: Platon (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_1_platon_resumen.m4a' },
      { title: 'Relecturas — Cap. 1: Platon textos seleccionados (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_1_platon_textos_seleccionados.m4a' },
      { title: 'Relecturas — Cap. 4: Descartes (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_4_descartes_resumen.m4a' },
      { title: 'Relecturas — Cap. 4: Descartes textos seleccionados (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_4_descartes_textos_seleccionados.m4a' },
      { title: 'Relecturas — Cap. 5: Hume (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_5_hume_resumen.m4a' },
      { title: 'Relecturas — Cap. 5: Hume textos seleccionados (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_5_hume_textos_seleccionados.m4a' },
      { title: 'Relecturas — Cap. 6: Kant (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_6_kant_resumen.m4a' },
      { title: 'Relecturas — Cap. 6: Kant textos seleccionados (audio)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_6_kant_textos_seleccionados.m4a' },
      { title: 'Relecturas — Cap. 7: Hegel (audio, parte 1)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_7_hegel_resumen_1.m4a' },
      { title: 'Relecturas — Cap. 7: Hegel (audio, parte 2)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_7_hegel_resumen_2.m4a' },
      { title: 'Relecturas — Cap. 8: Nietzsche (audio, parte 1)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_8_nietzche_resumen_1.m4a' },
      { title: 'Relecturas — Cap. 8: Nietzsche (audio, parte 2)', type: 'audio', path: '/content/autores/eudeba/material_generado/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos_cap_8_nietzche_resumen_2.m4a' },
    ],
  },
  {
    id: 'frederick-copleston',
    name: 'Copleston',
    fullName: 'Frederick Charles Copleston',
    years: '1907 – 1994',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2OjLMoZEuDrORM2RgJjZSeG2n9o0wH9xRg&s',
    bio: 'Sacerdote jesuita, filosofo e historiador de la filosofia britanico. Su monumental Historia de la filosofia en nueve volumenes es una de las obras de referencia mas completas sobre el desarrollo del pensamiento occidental, desde los presocraticos hasta el existencialismo.',
    works: [
      ...Array.from({ length: 9 }, (_, i) => ({
        title: `Historia de la filosofia — Vol. ${i + 1}`,
        path: `/content/autores/frederick_copleston/historia_de_la_filosofia_copleston_vol_${i + 1}.pdf`,
      })),
    ],
    generated: [
      { title: 'Vol. 1, Cap. 20 — La doctrina de las Formas (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_20_la_doctrina_de_las_formas_resumen.pdf' },
      { title: 'Vol. 1, Cap. 20 — La doctrina de las Formas (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_20_la_doctrina_de_las_formas_resumen.m4a' },
      { title: 'Vol. 1, Cap. 21 — La psicologia de Platon (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_21_la_psicologia_de_platon_resumen.pdf' },
      { title: 'Vol. 1, Cap. 21 — La psicologia de Platon (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_21_la_psicologia_de_platon_resumen.m4a' },
      { title: 'Vol. 1, Cap. 22 — La teoria moral (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_22_la_teoria_moral_resumen.pdf' },
      { title: 'Vol. 1, Cap. 22 — La teoria moral (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_22_la_teoria_moral_resumen.m4a' },
      { title: 'Vol. 1, Cap. 23 — El Estado (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_23_el_estado_resumen.pdf' },
      { title: 'Vol. 1, Cap. 23 — El Estado (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_23_el_estado_resumen.m4a' },
      { title: 'Vol. 1, Cap. 24 — La fisica de Platon (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_24_la_fisica_de_platon_resumen.pdf' },
      { title: 'Vol. 1, Cap. 24 — La fisica de Platon (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_24_la_fisica_de_platon_resumen.m4a' },
      { title: 'Vol. 1, Cap. 25 — El arte en Platon (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_25_el_arte_en_platon_resumen.pdf' },
      { title: 'Vol. 1, Cap. 25 — El arte en Platon (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_25_el_arte_en_platon_resumen.m4a' },
      { title: 'Vol. 1, Cap. 26 — La Academia Antigua (resumen)', type: 'pdf', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_26_la_academia_antigua_resumen.pdf' },
      { title: 'Vol. 1, Cap. 26 — La Academia Antigua (audio)', type: 'audio', path: '/content/autores/frederick_copleston/material_generado/historia_de_la_filosofia_copleston_libro_1_cap_26_la_academia_antigua_resumen.m4a' },
    ],
  },
];

export const authors: Author[] = authorDefinitions.map(withDiscoveredAuthorMaterials);
