export interface Material {
  title: string;
  type: 'pdf' | 'audio' | 'video' | 'markdown' | 'image';
  path: string;
  label?: string;
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
];

export const authors: Author[] = [
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
    id: 'william-guthrie',
    name: 'Guthrie',
    fullName: 'William Keith Chambers Guthrie',
    years: '1906 – 1981',
    image: 'https://live.staticflickr.com/65535/51022404937_b29cc06f83_c.jpg',
    bio: 'Filologo clasico y helenista escoces. Su obra Los filosofos griegos ofrece una introduccion accesible al desarrollo del pensamiento griego desde los presocraticos hasta Aristoteles.',
    works: [
      { title: 'Los filosofos griegos', path: '/content/autores/william_guthrie/los_filosofos_griegos_guthrie.pdf' },
    ],
    generated: [
      { title: 'Resumen cap. 4 (PDF)', type: 'pdf', path: '/content/autores/william_guthrie/material_generado/los_filosofos_griegos_guthrie_cap_4_resumen.pdf' },
      { title: 'Resumen cap. 4 (audio)', type: 'audio', path: '/content/autores/william_guthrie/material_generado/los_filosofos_griegos_guthrie_cap_4_resumen.m4a' },
    ],
  },
];
