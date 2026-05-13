import type { Parcial } from './content';

/*
 * Parciales — primer parcial CBC/UBA Filosofia
 *
 * Las respuestas estan estrictamente basadas en el contenido del docente
 * (Jaspers, La filosofia desde el punto de vista de la existencia, caps. 1-2;
 *  Eudeba, Relecturas, capitulos sobre Platon, Descartes, Hume y Kant)
 * y, cuando corresponde, en el material generado a partir de ese contenido.
 *
 * Las referencias de pagina corresponden al PDF tal como fue provisto por el
 * docente (numeracion del PDF, no a la numeracion impresa del libro).
 */

export const parciales: Parcial[] = [
  {
    id: 'primer-parcial',
    number: 'Primer parcial',
    title: 'Primer parcial — Introduccion a la Filosofia',
    subtitle: 'CBC | UBA · Sede Chivilcoy',
    description:
      'Material organizado para el primer parcial: textos provistos por el docente, materiales generados a partir de ellos para enriquecer el estudio, el modelo de examen entregado en clase y las respuestas elaboradas estrictamente a partir de ese material.',
    topics: [
      { author: 'Karl Jaspers', detail: 'La filosofia desde el punto de vista de la existencia — Capitulos 1 y 2' },
      { author: 'Platon', detail: 'Capitulo de Relecturas (Eudeba) — La Republica' },
      { author: 'Descartes', detail: 'Capitulo de Relecturas (Eudeba) — Discurso del metodo / Meditaciones' },
      { author: 'David Hume', detail: 'Capitulo de Relecturas (Eudeba) — Investigacion sobre el entendimiento humano' },
      { author: 'Immanuel Kant', detail: 'Capitulo de Relecturas (Eudeba) — Critica de la razon pura' },
    ],
    contents: [
      {
        title: 'Karl Jaspers — La filosofia desde el punto de vista de la existencia',
        type: 'pdf',
        source: 'docente',
        path: '/content/parciales/primer_parcial/contenido/la_filosofia_desde_el_punto_de_vista_de_la_existencia_karl_jaspers.pdf',
      },
      {
        title: 'Relecturas — Claves hermeneuticas para la comprension de los textos filosoficos',
        type: 'pdf',
        source: 'docente',
        path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
      },
    ],
    generated: [
      {
        title: 'Jaspers — Resumen caps. 1-2 (markdown)',
        type: 'markdown',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia — caps. 1-2',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_cap_1_to_2_resumen.md',
      },
      {
        title: 'Jaspers — Resumen completo (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_resumen_completo.pdf',
      },
      {
        title: 'Jaspers — Presentacion general (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_presentacion.pdf',
      },
      {
        title: 'Jaspers — Debate caps. 1-2 (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia — caps. 1-2',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_cap_1_to_2_debate.m4a',
      },
      {
        title: 'Jaspers — Debate caps. 3-7 (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia — caps. 3-7',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_cap_3_to_7_debate.m4a',
      },
      {
        title: 'Jaspers — Lo Circunvalante (video)',
        type: 'video',
        source: 'generado',
        origin: 'La filosofia desde el punto de vista de la existencia — Lo Circunvalante',
        path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_lo_circunvalante_resumen_video.mp4',
      },
      {
        title: 'Relecturas — Cap. 1 Platon: resumen (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. I — Platon, entre lo visible y lo pensable',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_resumen.pdf',
      },
      {
        title: 'Relecturas — Cap. 1 Platon: resumen (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. I — Platon, entre lo visible y lo pensable',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_resumen.m4a',
      },
      {
        title: 'Relecturas — Cap. 1 Platon: textos seleccionados (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. I — Platon, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_textos_seleccionados.pdf',
      },
      {
        title: 'Relecturas — Cap. 1 Platon: textos seleccionados (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. I — Platon, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_textos_seleccionados.m4a',
      },
      {
        title: 'Relecturas — Cap. 4 Descartes: resumen (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. IV — Descartes o el sueno de la razon',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_4_descartes_resumen.m4a',
      },
      {
        title: 'Relecturas — Cap. 4 Descartes: textos seleccionados (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. IV — Descartes, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_4_descartes_textos_seleccionados.m4a',
      },
      {
        title: 'Relecturas — Cap. 5 Hume: resumen (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. V — El microscopio de Hume y el recurso a la imaginacion',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_resumen.pdf',
      },
      {
        title: 'Relecturas — Cap. 5 Hume: resumen (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. V — El microscopio de Hume',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_resumen.m4a',
      },
      {
        title: 'Relecturas — Cap. 5 Hume: textos seleccionados (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. V — Hume, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_textos_seleccionados.pdf',
      },
      {
        title: 'Relecturas — Cap. 5 Hume: textos seleccionados (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. V — Hume, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_textos_seleccionados.m4a',
      },
      {
        title: 'Relecturas — Cap. 6 Kant: resumen (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. VI — El tribunal de la razon y la filosofia de la historia en Kant',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_resumen.pdf',
      },
      {
        title: 'Relecturas — Cap. 6 Kant: resumen (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. VI — Kant, resumen',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_resumen.m4a',
      },
      {
        title: 'Relecturas — Cap. 6 Kant: textos seleccionados (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Relecturas, cap. VI — Kant, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_textos_seleccionados.pdf',
      },
      {
        title: 'Relecturas — Cap. 6 Kant: textos seleccionados (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Relecturas, cap. VI — Kant, textos seleccionados',
        path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_textos_seleccionados.m4a',
      },
    ],
    example: {
      title: 'Primer parcial — Modelo provisto por el docente',
      path: '/content/parciales/primer_parcial/primer_parcial_ejemplo.pdf',
    },
    exam: {
      header: 'PRIMER PARCIAL DE FILOSOFIA — CBC | UBA',
      date: '17 de octubre de 2025',
      sede: 'Sede Chivilcoy',
      instructions: 'Responder 4 de las siguientes preguntas.',
      questions: [
        {
          number: 1,
          question:
            'Explique de que manera la transicion de una sociedad centrada en el palacio real y la palabra secreta hacia una vida social publica centrada en el agora transformo la naturaleza del poder y del conocimiento.',
          inScope: false,
          scopeNote:
            'Esta pregunta versa sobre el paso del palacio al agora (tematica desarrollada por Jean-Pierre Vernant) y excede los temas listados para este parcial (Jaspers caps. 1-2 y los capitulos de Platon, Descartes, Hume y Kant de Relecturas). El material del docente disponible solo la toca lateralmente, en la introduccion al capitulo de Platon de Relecturas.',
          answer: [
            'La transicion del palacio al agora aparece tematizada de manera indirecta en la introduccion del capitulo dedicado a Platon en Relecturas. Alli se senala que "la filosofia parece algo griego y coincide con la aportacion de las ciudades: haber formado sociedades de amigos o de iguales, pero tambien haber instaurado entre ellas y en cada una de ellas relaciones de rivalidad, oponiendo a unos pretendientes en todos los ambitos, en el amor, en los juegos, los tribunales, las magistraturas, la politica y hasta en el pensamiento... La rivalidad de los hombres libres, un atletismo generalizado: el agon" (Relecturas, pp. 19-20).',
            'En esa misma introduccion se subraya que "el pensamiento griego, que es cosa de la ciudad, hace de la ciudad cosa suya" (p. 20). Si en una sociedad palaciega el saber se concentraba en el rey y se trasmitia como palabra secreta —no debatible y no publica—, el desplazamiento al agora supone que el saber se discute en un espacio comun: el tribunal, la asamblea, la plaza. La Apologia de Socrates, situada en el espacio del tribunal, es el ejemplo que el texto retoma para mostrar que "un pensamiento etico y politico incipiente rivaliza con un pensamiento physico, cosmico, en el interior de otro duelo, juridico, que se narra como la acusacion y condena historica de Socrates" (p. 20).',
            'El poder, en consecuencia, deja de ser palabra revelada e inapelable para convertirse en argumento sometido a discusion publica; y el conocimiento deja de ser secreto guardado por una casta para volverse logos compartido, expuesto al agon de la polis.',
            'NOTA: una exposicion mas amplia de este pasaje del mito al logos y del palacio al agora corresponde a Vernant (Los origenes del pensamiento griego), que no integra el material del docente para este parcial. Las respuestas elaboradas a continuacion se ajustan estrictamente a lo provisto.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. I, Platon, Introduccion (Nicolas Fernandez Muriano)',
              pages: '19-20 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 1 Platon: resumen',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_resumen.pdf',
            },
          ],
        },
        {
          number: 2,
          question:
            'En la Republica de Platon, ¿como se define la justicia tanto en el Estado como en el individuo?',
          inScope: true,
          answer: [
            'Para Platon, la justicia no es una norma exterior sino la correcta articulacion interna entre las partes de un todo, ya se trate de la polis o del alma individual. Su definicion arranca de la analogia entre alma y Estado: ambos se componen de tres "partes" y la justicia consiste en que cada una cumpla la funcion que le es propia bajo el gobierno de la inteligencia.',
            'En el plano del alma, Relecturas resume con precision la tripartito platonica: "las diversas partes del alma (una apetitiva, otra irascible, otra intelectiva)... Cada parte del alma tiene su objeto, el apetito, deseo de alimento; lo irascible, deseo de gloria; la inteligencia, deseo de conocimiento. Pero solo la inteligencia posee el antidoto contra los falsos objetos de deseo que introducen un principio de insatisfaccion que tiende al exceso" (p. 29). El hombre justo es aquel cuya inteligencia gobierna lo irascible y lo apetitivo, evitando la "inversion de las relaciones entre las diversas partes del alma" (p. 29). La justicia individual es esta concordia ordenada, donde cada parte hace lo suyo y obedece a lo mejor.',
            'En el plano del Estado, la justicia se obtiene cuando cada clase realiza la funcion que le corresponde por su naturaleza y formacion: los gobernantes-filosofos contemplan el modelo trascendente (el Bien en si, la Justicia en si), los guardianes cuidan la ciudad y los productores se ocupan de las tareas materiales. El texto subraya que "un Estado correctamente fundado tiene como modelo los principios trascendentes: el Bien en si, la Justicia en si, etc. La fundacion politica tiene un fundamento trascendente" (p. 29) y que "la verdadera ley no atiende a que una sola clase la pase excepcionalmente bien en la Polis, sino que se las compone para generar en la Polis entera esto: que se armonicen los ciudadanos... haciendo que se presten entre si servicios" (p. 51).',
            'La armonia entre las clases requiere que la dimension privada se atenue al maximo: "Los gobernantes y guardianes de la polis solo tienen de privado su cuerpo: poseen todo en comun, incluidos los hijos" (p. 52). Lo privado, en Platon, "es fuente de disension politica, necesariamente conduce a privilegiar los intereses egoistas sobre el interes de la comunidad, cuya consecuencia es la tirania (el deseo de uno, convertido en ley de todos)" (p. 52). De alli que Platon describa al verdadero gobernante como aquel que es obligado a descender de la contemplacion del Bien para "ocuparse y cuidar de los demas" (p. 52): el gobernante justo es el que no quiere gobernar pero acepta hacerlo en justicia.',
            'En sintesis, la justicia es —tanto en el Estado como en el individuo— la armonia jerarquica entre las partes, donde la racional gobierna a las demas y cada una hace lo propio sin pretender lo ajeno. Tanto la educacion (entendida como "el arte de volver este organo del alma del modo mas facil y eficaz", p. 50) como la organizacion politica apuntan a producir esa orientacion correcta: la justicia es esa correccion realizada.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. I, Platon (Introduccion y Seleccion de textos)',
              pages: '29, 50-52 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 1 Platon: resumen',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_resumen.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 1 Platon: textos seleccionados',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_1_platon_textos_seleccionados.pdf',
            },
          ],
        },
        {
          number: 3,
          question:
            'De acuerdo con la Politica de Aristoteles, ¿cual es el origen y el fin de la ciudad (polis)? ¿Por que se considera al hombre un animal social por naturaleza?',
          inScope: false,
          scopeNote:
            'Aristoteles no figura entre los autores del programa especifico de este parcial (los capitulos listados por el docente son Platon, Descartes, Hume y Kant). El capitulo II de Relecturas si esta incluido en el PDF del docente pero corresponde a un parcial posterior; por eso solo se sintetiza brevemente sin elaborar mas alla del material.',
          answer: [
            'El capitulo II de Relecturas (Metafisica, etica y politica en Aristoteles, pp. 59-110) es el unico material del docente que toca el tema. Alli se desarrolla la idea aristotelica de que la polis es la comunidad perfecta porque es la unica capaz de procurar el fin propio del hombre: la vida buena o autosuficiente. La polis surge de la asociacion natural de la familia y la aldea, pero a diferencia de estas tiene su fin en si misma, no en la mera supervivencia.',
            'El hombre, segun Aristoteles, es "zoon politikon" —animal politico o social por naturaleza— porque posee logos (palabra-razon), no solo voz: la palabra le permite no solo expresar placer o dolor (como los animales) sino discutir lo justo y lo injusto, lo conveniente y lo perjudicial. Esa capacidad solo se actualiza en la polis: quien vive fuera de la ciudad o es bestia o es dios. La polis es asi anterior por naturaleza a la familia y al individuo, en el sentido en que el todo lo es a las partes: solo en la comunidad politica el hombre alcanza su forma plena.',
            'NOTA: esta respuesta se ofrece a titulo informativo. Para una elaboracion mas completa hay que ir al capitulo II de Relecturas (pp. 59-110).',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. II, Metafisica, etica y politica en Aristoteles',
              pages: '59-110 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
          ],
        },
        {
          number: 4,
          question:
            '¿De que manera el concepto aristotelico de virtud, entendida como un justo medio (determinado por la razon y por aquello que decidiria el hombre prudente), representa una aproximacion mas practica a la etica, distanciandose del enfoque metafisico platonico?',
          inScope: false,
          scopeNote:
            'Igual que la pregunta 3, este punto corresponde al capitulo II de Relecturas (Aristoteles), que esta incluido fisicamente en el PDF del docente pero no figura en el programa de este parcial. Se sintetiza brevemente.',
          answer: [
            'En el capitulo II de Relecturas se desarrolla la nocion aristotelica de virtud (arete) como habito (hexis) de eleccion situado en un termino medio (mesotes) relativo a nosotros, determinado por la razon, tal como lo determinaria el hombre prudente (phronimos). La virtud no es una Idea separada como en Platon, sino una disposicion adquirida que se forma mediante la repeticion de actos buenos y se manifiesta en la accion concreta.',
            'Frente al planteo platonico, donde lo bueno se conoce contemplando el Bien en si y la conducta justa imita un modelo trascendente, Aristoteles ubica la etica en el terreno de lo practico: lo bueno no es uno y separado del mundo, sino que se realiza segun las circunstancias, las personas, los tiempos y los modos. La phronesis (prudencia) es por eso la virtud clave: no aplica una formula universal sino que delibera en cada caso entre dos extremos viciosos (exceso y defecto), eligiendo el medio que corresponde.',
            'Asi, la valentia es el medio entre la temeridad y la cobardia, la generosidad entre la prodigalidad y la avaricia, etc. La etica aristotelica es practica porque no se agota en saber que es lo bueno: requiere haberse formado en buenas costumbres y deliberar en situacion. Esto la distancia del enfoque metafisico platonico, para el que la conducta correcta presupone el ascenso intelectual al Bien.',
            'NOTA: respuesta sintetica; el desarrollo completo esta en el capitulo II de Relecturas (pp. 59-110), no incluido en los temas listados para este parcial.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. II, Metafisica, etica y politica en Aristoteles',
              pages: '59-110 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
          ],
        },
        {
          number: 5,
          question:
            'Explique como se descubre y la importancia del cogito (pienso) en el sistema de Descartes.',
          inScope: true,
          answer: [
            'En la lectura que Relecturas hace de Descartes, el cogito se descubre llevando la duda hasta su limite. Descartes parte de una constatacion: las opiniones recibidas no estan firmemente fundamentadas, y para refundar el saber es necesario "comenzar por dudar". Pero a diferencia del escepticismo de Montaigne, "la duda se aplica de manera metodica" (p. 135): es un instrumento provisional para encontrar algo absolutamente cierto. Descartes pone en cuestion primero los sentidos (que a veces nos enganan), luego la posibilidad de distinguir vigilia y sueno ("Supongamos entonces ahora que estamos dormidos y que todas estas particularidades... no son sino falsas ilusiones", p. 153), y finalmente hipostasia "la existencia de un espiritu enganador que deposita pensamientos falsos en nuestra mente" (p. 137).',
            'En el limite de esta hiperbole de la duda, sin embargo, aparece algo que no puede ser puesto en cuestion: que mientras dudo, estoy pensando, y por lo tanto existo. Es exactamente el argumento que recoge tambien Jaspers en La filosofia: "La famosa frase de Descartes pienso, luego existo era para el indubitablemente cierta cuando dudaba de todo lo demas, pues ni siquiera el perfecto engano en materia de conocimiento, aquel que quiza ni percibo, puede enganarme acerca de mi existencia mientras me engano al pensar" (Jaspers, p. 15).',
            'La importancia del cogito es multiple. Primero, es el primer principio absoluto: una certeza inmediata que resiste toda duda y se vuelve fundamento del resto del conocimiento. Segundo, esa certeza es la del yo en cuanto cosa que piensa: "Soy una cosa que piensa", donde "pensar" es tomado en sentido amplio, "comprendiendo en el cualquier actividad psiquica... como dudar, entender, concebir, afirmar, negar, querer" (p. 138). El yo cartesiano no se identifica primero con el cuerpo sino con la mente, lo cual abre la division moderna entre res cogitans y res extensa.',
            'Tercero, sobre el cogito Descartes intenta luego reconstruir todo lo demas, pero esa reconstruccion no se sostiene sin la garantia divina: "desde el punto de vista del conocimiento, la certeza del cogito parece quedar en una posicion subordinada respecto de la veracidad divina y, desde el punto de vista del ser, el yo se desplaza a un segundo rango" (p. 141). El cogito es entonces, a la vez, fundamento epistemico y a la vez el problema del solipsismo: como salir del yo hacia el mundo (cf. p. 139, donde se plantea explicitamente esa cuestion).',
            'En clave jasperiana, el cogito ilustra el segundo de los tres motivos del filosofar: la duda como camino hacia la certeza, "fuente del examen critico de todo conocimiento" (Jaspers, p. 15). En clave del propio Descartes, el cogito es el punto arquimedico desde el que se reanuda el saber. Su importancia historica es enorme: marca el comienzo del paradigma moderno, donde el sujeto deja de ser pasivo y se convierte en fundamento del conocimiento.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Jaspers — La filosofia, cap. II (Los origenes de la filosofia)',
              pages: '15 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/la_filosofia_desde_el_punto_de_vista_de_la_existencia_karl_jaspers.pdf',
            },
            {
              source: 'docente',
              document: 'Relecturas — Cap. IV, Descartes o el sueno de la razon (Introduccion y Seleccion de textos)',
              pages: '135, 137-141, 152-156 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 4 Descartes: resumen (audio)',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_4_descartes_resumen.m4a',
            },
            {
              source: 'generado',
              document: 'Jaspers — Resumen caps. 1-2 (markdown)',
              path: '/content/parciales/primer_parcial/material_generado/la_filosofia_karl_jaspers_cap_1_to_2_resumen.md',
            },
          ],
        },
        {
          number: 6,
          question:
            'Segun David Hume, ¿cual es la diferencia fundamental entre impresiones e ideas, y como se originan estas ultimas?',
          inScope: true,
          answer: [
            'Para Hume, "todo conocimiento procede de la experiencia, ya sea externa o interna" (Relecturas, p. 163). El conjunto de los contenidos mentales lo denomina "percepciones", que es "el nombre general para cualquier estado de conciencia" (p. 163). Las percepciones se dividen en dos clases segun el modo en que llegan al espiritu.',
            'Las impresiones son "las percepciones que se reciben de modo directo... comprenden las impresiones de la sensacion (se perciben por los sentidos) y las de la reflexion (provienen de nuestro interior, como pasiones, deseos y emociones)" (p. 163). Son la materia originaria del conocimiento: lo que sentimos, vemos, oimos, deseamos.',
            'Las ideas, en cambio, son "las percepciones derivadas, es decir, aquellas que se reciben de modo indirecto pues tienen su origen en las impresiones... Siendo meras copias, su permanencia y reproduccion en el espiritu se deben a la actividad conjunta de la memoria y la imaginacion" (p. 163). Es decir: toda idea es huella, copia o reactivacion de una impresion previa.',
            'La diferencia fundamental entre ambas, segun Hume, es de intensidad: "Lo que permite diferenciar entre impresiones e ideas es su intensidad o vivacidad: las primeras son mas fuertes y vivaces que las segundas" (p. 163). La impresion del fuego que me quema es indiscutiblemente mas viva que la idea del fuego que me represento despues, en su ausencia. Esa misma intensidad es la marca de que algo es percibido directamente y no apenas pensado.',
            'En cuanto a su origen, las ideas se forman porque la mente —por memoria e imaginacion— retiene y reproduce las impresiones. Hume distingue ademas entre ideas simples e ideas complejas. Las primeras son copia directa de una impresion simple. Las complejas, en cambio, "se llega(n) por la imaginacion, cuya actividad consiste en mezclar, componer, dividir o asociar los datos que provienen de las impresiones" (p. 164). Por eso una idea como "montana de oro" no proviene de una impresion originaria sino de la combinacion de las ideas de "montana" y de "oro" (p. 164).',
            'De aqui surge tambien el criterio humeano de validez: para saber si una idea es legitima, hay que buscar la impresion de la que procede. "El criterio para determinar la validez de una idea —metodo llamado por algunos comentaristas el microscopio de Hume— consiste en buscar la impresion que le corresponde" (p. 164). Cuando esa impresion no aparece —como sucede con las ideas de "alma", "sustancia" o "yo"—, la idea es declarada "puramente ficticia" (p. 165). El empirismo radical de Hume queda asi formulado: no hay nada en la mente que no haya pasado antes por los sentidos o por la reflexion interna.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. V, El microscopio de Hume y el recurso a la imaginacion (Introduccion)',
              pages: '163-165 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 5 Hume: resumen',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_resumen.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 5 Hume: textos seleccionados',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_5_hume_textos_seleccionados.pdf',
            },
          ],
        },
        {
          number: 7,
          question:
            '¿En que consiste la "revolucion copernicana" de Immanuel Kant en el ambito del conocimiento?',
          inScope: true,
          answer: [
            'Kant llega a su "revolucion copernicana" como salida al problema que le hereda la tradicion racionalista, sometida a la critica de Hume. Como recuerda Relecturas, la Critica de la razon pura "pone fin" a las "pretensiones del racionalismo dogmatico, que confiere a la razon la posibilidad de llegar enteramente por si misma al conocimiento de la totalidad de lo real. Al despertar, por obra del empirismo (especialmente de Hume), del sueno dogmatico en que se hallaba sumido —como el mismo habra de declarar—, Kant consigue ofrecer una fundamentacion diversa del modo como conocemos el mundo" (p. 181).',
            'El nucleo de esa fundamentacion es lo que Kant llama, por analogia con la astronomia, una revolucion copernicana en filosofia. Relecturas lo expone con claridad: "asi como Copernico no consigue explicarse ciertos fenomenos celestes a partir de la consideracion de que la tierra esta fija en el centro del universo (paradigma aristotelico), tampoco es posible explicarse la existencia de cierta especie de conocimientos bajo el supuesto de un sujeto determinado enteramente por los objetos. Es preciso, por tanto, frente a una anomalia, cambiar el paradigma. Y esto es lo que hace Kant: producir en la filosofia una revolucion semejante a la que realiza Copernico en el ambito de la fisica" (p. 183).',
            'El cambio de paradigma consiste en invertir la relacion entre sujeto y objeto en el conocimiento. La tradicion suponia que el conocimiento debe regirse por los objetos (el sujeto los refleja pasivamente). Kant invierte el supuesto: son los objetos los que deben regirse por las condiciones del sujeto cognoscente. Como dice el texto: "Lo esencial de esa revolucion es que el conocimiento deja de concebirse como reflejo de los objetos tal como son en si mismos, el sujeto deja de ser pasivo; en adelante, el conocimiento implica constituir (no crear) la realidad" (p. 183).',
            'A esta postura Kant la llama idealismo trascendental: "lejos de reflejar la naturaleza de los entes, son los entes los que reflejan la estructura cognitiva de la mente. Ella es la que confiere, a traves de las formas puras a priori (intuiciones y conceptos), universalidad y necesidad" (p. 183). Las formas puras de la sensibilidad —espacio y tiempo— y las categorias del entendimiento no son extraidas de la experiencia: son las condiciones que el sujeto pone para que haya experiencia posible. Por eso podemos tener conocimientos a priori, universales y necesarios, que el empirismo de Hume no podia explicar (cf. p. 183: "si la intuicion tuviera que regirse por la naturaleza de los objetos, no veo como podria conocerse algo a priori sobre esa naturaleza").',
            'La revolucion copernicana es entonces el giro segun el cual la objetividad del conocimiento no consiste en reflejar las cosas tal como son en si, sino en que toda experiencia posible queda configurada por las estructuras a priori que el sujeto aporta. El sujeto no crea el mundo de la nada (no es un demiurgo) pero lo constituye en cuanto experiencia: hay un mundo en si "inescrutable" (p. 187), y un mundo en cuanto se nos aparece, al que se ajusta nuestro saber.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. VI, El tribunal de la razon... en Immanuel Kant (Introduccion)',
              pages: '181, 183, 187 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 6 Kant: resumen',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_resumen.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 6 Kant: textos seleccionados',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_textos_seleccionados.pdf',
            },
          ],
        },
        {
          number: 8,
          question:
            '¿Cual es la distincion kantiana entre fenomenos y noumenos, y que implicaciones tiene para los limites del conocimiento humano?',
          inScope: true,
          answer: [
            'La distincion entre fenomeno y noumeno es consecuencia directa de la revolucion copernicana. Si las formas a priori del sujeto son condicion de toda experiencia posible, entonces solo podemos conocer las cosas en cuanto se nos aparecen, no tal como son en si mismas.',
            'Relecturas lo formula con precision: "El en si del mundo es inescrutable (no se puede conocer), pero la razon tiene la chance de pensarlo. En otras palabras: asi como es posible considerar las cosas tal como se nos aparecen, es posible considerarlas tal como son en si mismas" (p. 187). "Considerarlas tal como se nos aparecen" da lugar al concepto de fenomeno: el objeto en cuanto entra en nuestra experiencia, configurado por el espacio y el tiempo (formas puras de la sensibilidad) y subsumido bajo las categorias del entendimiento. "Considerarlas tal como son en si mismas" da lugar al concepto de noumeno: el objeto pensado al margen de toda condicion sensible.',
            'La definicion textual del libro es contundente: "El concepto epistemologico que la razon se forma cuando intenta caracterizar los objetos cuando los piensa al margen del conocimiento sensible es el concepto de noumeno" (p. 187). El noumeno no es algo que conozcamos: es algo que podemos pensar como limite. "¿Que sentido tiene formarse un concepto de aquello cuyo conocimiento nos esta vedado? El sentido es puramente epistemologico: trazar un limite" (pp. 187-188).',
            'Las implicaciones para los limites del conocimiento son decisivas. Primero: el conocimiento humano queda restringido al campo de los fenomenos, es decir, "a los objetos de la experiencia posible" (p. 186, citando: "no podemos, pues, tener conocimiento a priori sino de objetos de la experiencia posible"). Toda pretension de conocer la realidad en si misma queda descalificada como ilusion trascendental.',
            'Segundo: cuando la razon, a diferencia del entendimiento, intenta saltar fuera del ambito fenomenico y llegar a un "incondicionado", produce las llamadas ideas de la razon: alma, mundo y Dios. El texto lo explica: la razon "va a ir de condicion en condicion desprendiendose de todo limite empirico... asi, en su afan de encontrar al sujeto que no pueda ser predicado, va a llegar, a traves del silogismo categorico, a la idea de alma, a la que va a cosificar, erroneamente. En efecto, no cabe... atribuir existencia efectiva a aquello que excede el ambito de la experiencia. Lo mismo sucede con la idea de mundo... Finalmente la idea de Dios... surge al conceder existencia a un ente al que se concibe como suma realidad" (p. 188). Estas ideas tienen un uso regulativo legitimo (orientan la investigacion) pero no constituyen conocimiento.',
            'Tercero: la distincion abre, sin embargo, un espacio para la moral. Lo suprasensible —lo nouménico— no es conocido teoricamente, pero "logra determinacion en la moral" (p. 202): la libertad, que como objeto teorico es inaccesible, encuentra realidad en el actuar moral. Asi "queda... un campo ilimitado, pero tambien inaccesible para nuestra total facultad de conocer, que es el campo de lo suprasensible, y se abre un abismo infranqueable entre la esfera del concepto de la naturaleza como lo sensible y la esfera del concepto de la libertad como lo suprasensible" (p. 201-202).',
            'En sintesis: solo conocemos fenomenos, las cosas tal como se nos aparecen bajo las condiciones a priori del sujeto. Los noumenos no son conocibles sino apenas pensables como limite. Esta es, para Kant, la salida critica al doble extremo del dogmatismo racionalista (que pretendia conocer todo) y del escepticismo humeano (que disolvia la objetividad cientifica): podemos fundar el conocimiento universal y necesario, pero solo sobre la experiencia posible.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Cap. VI, El tribunal de la razon... en Immanuel Kant (Introduccion)',
              pages: '186-188, 201-202 (PDF)',
              path: '/content/parciales/primer_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 6 Kant: resumen',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_resumen.pdf',
            },
            {
              source: 'generado',
              document: 'Relecturas — Cap. 6 Kant: textos seleccionados',
              path: '/content/parciales/primer_parcial/material_generado/relecturas_eudeba_cap_6_kant_textos_seleccionados.pdf',
            },
          ],
        },
      ],
    },
  },
];
