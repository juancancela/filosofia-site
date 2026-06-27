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
  {
    id: 'segundo-parcial',
    number: 'Segundo parcial',
    title: 'Segundo parcial — Introduccion a la Filosofia',
    subtitle: 'CBC | UBA · Sede Chivilcoy',
    description:
      'Material organizado para el segundo parcial: textos provistos por el docente (Hegel y Nietzsche en Relecturas, Sartre y Beauvoir en sus obras), materiales generados a partir de ellos para enriquecer el estudio, el simulacro entregado en clase y las respuestas elaboradas estrictamente a partir de ese material.',
    topics: [
      { author: 'Hegel', detail: 'Fenomenologia del Espiritu — saber y ser, conciencia, experiencia, saber absoluto' },
      { author: 'Friedrich Nietzsche', detail: 'Sobre verdad y mentira en sentido extramoral + Como el "mundo verdadero" acabo convirtiendose en una fabula' },
      { author: 'Jean-Paul Sartre', detail: 'El existencialismo es un humanismo (pp. 21-40)' },
      { author: 'Simone de Beauvoir', detail: 'El segundo sexo — Introduccion (pp. 47-64)' },
    ],
    contents: [
      {
        title: 'Relecturas — Claves hermeneuticas (Hegel y Nietzsche)',
        type: 'pdf',
        source: 'docente',
        path: '/content/parciales/segundo_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
      },
      {
        title: 'Jean-Paul Sartre — El existencialismo es un humanismo',
        type: 'pdf',
        source: 'docente',
        path: '/content/parciales/segundo_parcial/contenido/el_existencialismo_es_un_humanismo_sartre.pdf',
      },
      {
        title: 'Simone de Beauvoir — El segundo sexo',
        type: 'pdf',
        source: 'docente',
        path: '/content/parciales/segundo_parcial/contenido/el_segundo_sexo.pdf',
      },
    ],
    generated: [
      {
        title: 'La Caida de los Absolutos (PDF)',
        type: 'pdf',
        source: 'generado',
        origin: 'Hegel, Nietzsche, Sartre y Beauvoir — sintesis del parcial',
        path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
      },
      {
        title: 'Lona pintada sobre el vacio (audio)',
        type: 'audio',
        source: 'generado',
        origin: 'Hegel, Nietzsche, Sartre y Beauvoir — debate del parcial',
        path: '/content/parciales/segundo_parcial/material_generado/lona_pintada_sobre_el_vacio.m4a',
      },
      {
        title: 'Guia del parcial de Filosofia (video)',
        type: 'video',
        source: 'generado',
        origin: 'Hegel, Nietzsche, Sartre y Beauvoir — guia audiovisual',
        path: '/content/parciales/segundo_parcial/material_generado/guia_parcial_filosofia.mp4',
      },
    ],
    example: {
      title: 'Simulacro de segundo parcial — provisto por el docente',
      path: '/content/parciales/segundo_parcial/Simulacro segundo parcial.pdf',
    },
    exam: {
      header: 'SIMULACRO SEGUNDO PARCIAL DE FILOSOFIA — CBC | UBA',
      date: 'Simulacro de practica',
      sede: 'Sede Chivilcoy',
      instructions:
        'Este es un simulacro de practica. A diferencia del parcial —en el que podran elegir 4 preguntas—, se recomienda responder las 8 preguntas para repasar todo el cuadernillo (Hegel, Nietzsche, Sartre y Beauvoir).',
      questions: [
        {
          number: 1,
          question:
            'Que significa, para Hegel, que el ser de las cosas sea a la vez "en si" y "para otro"? En que cambia esta relacion cuando ese "otro" es una conciencia, y que quiere decir que la conciencia es ademas "para si"?',
          inScope: true,
          answer: [
            'Hegel distingue tres modos del ser que reaparecen en todo el recorrido de la Fenomenologia: el "en si", el "para otro" y el "para si". El "en si" es la cosa tal como es por si misma, con su consistencia propia, con independencia de que alguien la mire o de con que se la compare: una piedra es una piedra, el agua es agua, la semilla ya contiene en si lo que es. Es el punto de partida, la cosa en su mera existencia.',
            'El "para otro" es la misma cosa pero considerada en relacion con las demas, definida por contraste y diferencia. La piedra es piedra porque no es agua, ni fuego, ni un arbol; el color rojo se distingue por no ser azul ni verde. Nada se define en el vacio: toda cosa se recorta sobre un fondo de relaciones (causas, diferencias, semejanzas). Por eso el "en si" y el "para otro" van juntos: la cosa tiene una consistencia propia y, a la vez, solo se determina dentro de una red de relaciones con lo demas.',
            'La relacion cambia de naturaleza cuando ese "otro" frente al que la cosa se presenta no es otra cosa, sino una conciencia. Entonces la cosa deja de relacionarse solo con otros objetos y pasa a ser objeto de pensamiento. La conciencia no deja las cosas como estan: al conocerlas las separa, las compara, las relaciona y las transforma. Por eso Hegel dice que la conciencia introduce en el ser una ruptura, una inquietud, un desgarramiento: el ser, que estaba quieto y cerrado sobre si, se abre a ser sabido. "El Espiritu solo conquista su verdad cuando es capaz de encontrarse a si mismo en el absoluto desgarramiento."',
            'El "para si" es lo decisivo y lo propio de la conciencia: ademas de ser (en si) y de relacionarse con lo demas (para otro), la conciencia es capaz de saberse a si misma y de reflexionar sobre su propio saber. Una piedra no sabe que es una piedra; un animal vive, pero no se pregunta por su saber. En cambio, un ser humano puede pensar "yo se esto", "me equivoque", "como llegue a saberlo". Eso es ser "para si".',
            'En sintesis, el recorrido de la Fenomenologia es justamente el pasaje desde un saber que mira solo las cosas (en si / para otro) hacia un saber que se vuelve sobre si mismo (para si). Y como para Hegel el sujeto que conoce no esta afuera del ser sino inmerso en el, ese "para si" de la conciencia es el momento en que el propio ser, al desarrollarse, llega a conocerse a si mismo a traves de la conciencia humana.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Capitulo sobre Hegel (Fenomenologia del Espiritu)',
              path: '/content/parciales/segundo_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 2,
          question:
            'Hegel sostiene que el conocimiento no puede entenderse ni como instrumento ni como medium para acceder a lo absoluto. Explique los argumentos con los que rechaza ambas concepciones y que entiende por "camino de la desesperacion" en el itinerario de la conciencia hacia el saber absoluto.',
          inScope: true,
          answer: [
            'En la Introduccion de la Fenomenologia, Hegel se ocupa de aclarar lo que el conocimiento NO es. Rechaza, primero, la idea de que el conocimiento sea un instrumento, una herramienta que el sujeto aplica a las cosas como quien usa unos anteojos, una lupa o un martillo. El argumento es simple: toda herramienta modifica aquello sobre lo que actua. Si el conocimiento fuera un instrumento asi, nunca conoceriamos la cosa tal como es, sino la cosa ya deformada por el instrumento.',
            'Ademas, esa deformacion no se puede "descontar": para restarle a la imagen lo que el instrumento le agrego, yo tendria que saber de antemano como es la realidad sin el instrumento. Pero conocer la realidad sin deformaciones es, justamente, lo que todavia no tengo (es lo que estoy buscando). Se cae en un circulo: necesitaria el resultado para poder empezar. Por eso no tiene sentido examinar primero "la facultad de conocer" antes de ponerse a conocer (esto va, sobre todo, contra Kant). Hay que meterse directamente en la experiencia del objeto.',
            'Rechaza, en segundo lugar, que el conocimiento sea un medium o medio pasivo: un elemento neutro a traves del cual lo absoluto llegaria hasta nosotros, como la luz a traves de un vidrio. Esto vale tambien contra el empirismo (Locke): conocer no es recibir impresiones sensibles y combinarlas como quien junta piezas. Si el medio fuera pasivo, igual habria que descontar el modo en que ese medio nos entrega lo real, y volveriamos al mismo callejon sin salida. Para Hegel el conocimiento no es ni instrumento que deforma ni medio que transmite: es activo, historico y dialectico, el proceso mismo por el cual la cosa se va mostrando y la conciencia se va corrigiendo sobre la marcha.',
            'El "camino de la desesperacion" (o de la duda) es como Hegel llama al itinerario que recorre la conciencia natural hacia el verdadero saber. No es un camino lineal ni comodo: esta lleno de errores, conflictos y frustraciones. Cada vez que la conciencia cree haber alcanzado una verdad definitiva, la pone a prueba contra la experiencia y descubre que esa certeza era parcial y se le derrumba; pierde lo que daba por seguro y entra en crisis.',
            'Pero esa perdida no es inutil: es justamente lo que la empuja a una forma de saber mas rica. La conciencia progresa perdiendo sus certezas anteriores; equivocarse no la deja afuera del saber, la mete adentro del camino. Por eso el saber absoluto, al final, no es saberlo "todo" como una enciclopedia de datos, sino comprender retrospectivamente ese recorrido completo: la meta junto con el camino, los errores, las experiencias parciales, las contradicciones y sus superaciones. Es un saber del saber, consciente de sus propios limites.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Capitulo sobre Hegel (Introduccion de la Fenomenologia)',
              path: '/content/parciales/segundo_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 3,
          question:
            'Describa de manera ordenada las etapas del relato "Historia de un error" de Nietzsche. Que permanece constante a lo largo del relato y que es lo que va cambiando?',
          inScope: true,
          answer: [
            'En "Como el mundo verdadero acabo convirtiendose en una fabula" (Crepusculo de los idolos, 1888), Nietzsche narra en seis pasos la historia de la filosofia occidental entendida como la historia de un error: el de haber inventado un "mundo verdadero" superior y opuesto a este mundo sensible.',
            '1) Platon: el mundo verdadero es el de las Ideas, eternas y universales, accesible al sabio, al piadoso y al virtuoso. El mundo sensible queda como algo cambiante e inferior. Aca se inaugura el gran error.',
            '2) Cristianismo: el mundo verdadero pasa a ser Dios, el Reino de los Cielos, la vida eterna. Se vuelve inalcanzable por ahora, pero prometido al creyente. El cristianismo profundiza el platonismo y devalua todavia mas este mundo.',
            '3) Kant: solo conocemos fenomenos, no la cosa en si; pero Dios, el alma y el deber se conservan en el plano moral. Kant no elimina el mundo verdadero: lo vuelve mas sutil (el deber, el imperativo categorico).',
            '4) Positivismo: rechaza la metafisica y se queda con los hechos verificables. Si el mundo verdadero no se puede conocer, ya no consuela ni obliga, y va perdiendo fuerza.',
            '5) Eliminacion del mundo verdadero: si es inutil, superfluo e indemostrable, hay que eliminarlo. Es la consumacion de la critica a la metafisica.',
            '6) Eliminacion tambien del mundo aparente: este es el paso decisivo. "Hemos eliminado el mundo verdadero. Que mundo queda? El aparente? No. Al eliminar el verdadero, eliminamos tambien el aparente." Algo solo puede llamarse "aparente" por comparacion con algo "verdadero"; sin un mundo verdadero superior, este mundo deja de ser apariencia. Queda el devenir, el cuerpo, la vida, la multiplicidad, la interpretacion.',
            'Lo que permanece constante a lo largo del relato es la funcion: en todas las etapas hay un fundamento absoluto colocado por encima de la vida que pretende darle sentido desde afuera (lo que Nietzsche llama Theos: Idea, Dios, cosa en si, deber moral, verdad absoluta). Lo que va cambiando es la mascara, el nombre y el grado de accesibilidad de ese mundo verdadero, hasta que termina disolviendose. Importante: Nietzsche no invierte el platonismo (no dice "lo sensible es lo verdadero", porque eso seguiria usando la oposicion); lo que hace es destruir la oposicion misma entre verdadero y aparente.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Capitulo sobre Nietzsche',
              path: '/content/parciales/segundo_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 4,
          question:
            'Explique la distincion nietzscheana entre "verdad como error util" y "verdad como error inutil". Por que, para Nietzsche, reconocer que la verdad es un error no implica caer en un nihilismo paralizante?',
          inScope: true,
          answer: [
            'Para Nietzsche toda verdad es interpretacion, ficcion, perspectiva: ninguna copia la realidad en si. El lenguaje no refleja lo real, sino que lo traduce en una cadena de metaforas (estimulo nervioso, imagen, sonido, palabra, concepto) y en cada paso simplifica y deforma. Los conceptos nacen de igualar cosas que no son iguales y funcionan gracias al olvido de su origen metaforico. De ahi la formula: "la verdad es una ficcion que se olvido de que era ficcion". En ese sentido amplio, toda verdad humana es un "error".',
            'Pero esto no significa que "todo da igual": no es un relativismo simplista. Nietzsche distingue dentro de los errores. El error util es la interpretacion que sirve para vivir, crear y afirmar la vida; es provisorio y sabe (o puede saber) que es interpretacion. El error inutil, en cambio, es el que niega la vida: el mundo verdadero, el mas alla, la moral trascendente, todos esos fundamentos absolutos que devaluan este mundo y ponen el valor maximo fuera de la existencia concreta.',
            'Por eso la pregunta central de Nietzsche ya no es si una verdad es absoluta o si copia la realidad, sino otra: esta verdad favorece o empobrece la vida? Afirma o niega la vida? Ese es el criterio que reemplaza al de verdadero/falso.',
            'Reconocer que la verdad es un error no conduce a un nihilismo paralizante porque, para Nietzsche, el nihilismo no es darse cuenta de que la verdad es ficcion, sino que los valores supremos pierden su valor sin que aparezca nada en su lugar: es la falta de respuesta al "para que?". Y ese nihilismo no empieza con la muerte de Dios, sino mucho antes, con Platon, cuando se puso el valor maximo afuera de esta vida.',
            'La filosofia tiene entonces dos momentos. Un momento critico, el del martillo (Crepusculo de los idolos): golpear la Idea, Dios, el mundo verdadero, el deber absoluto, para mostrar que estan huecos. Y un momento afirmativo: una vez destruidos los viejos fundamentos no queda la nada, sino la tarea de crear nuevos sentidos. Ahi aparece la figura del filosofo-artista (Zarathustra), creador de valores, que produce interpretaciones sabiendo que son provisorias. Por eso asumir que la verdad es un error util libera para crear sentidos que afirmen la vida, en lugar de paralizar.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Relecturas — Capitulo sobre Nietzsche (Sobre verdad y mentira en sentido extramoral)',
              path: '/content/parciales/segundo_parcial/contenido/relecturas_claves_hermeneuticas_para_la_comprension_de_los_textos_filosoficos.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 5,
          question:
            'Explique que significa, para Sartre, que "la existencia precede a la esencia". Tome como contraste el ejemplo del abrecartas y muestre por que esa logica no se aplica al ser humano.',
          inScope: true,
          answer: [
            '"La existencia precede a la esencia" es la formula central de El existencialismo es un humanismo, y para Sartre la comparten tanto los existencialistas cristianos (Jaspers, Marcel) como los ateos (Heidegger, Sartre). Significa que el ser humano primero existe —aparece en el mundo, se encuentra arrojado en una situacion— y solo despues se define, mediante sus actos, sus elecciones y sus proyectos. No hay una naturaleza o esencia humana dada de antemano.',
            'Sartre lo aclara por contraste con un objeto fabricado, el abrecartas. En los objetos tecnicos la esencia precede a la existencia: antes de que el abrecartas exista, alguien tuvo en su mente el concepto, es decir, que es y para que sirve (su funcion y su tecnica de fabricacion). El orden es: concepto previo, fabricacion, existencia del objeto. El abrecartas existe porque antes se definio su esencia.',
            'Lo mismo ocurre cuando se piensa en un Dios creador como un artesano superior: Dios tendria la idea de "hombre" y crearia a cada individuo como un caso de ese concepto universal. Aqui la esencia humana iria primero. Y, dato importante, muchos filosofos del siglo XVIII prescindieron de Dios pero conservaron la idea de una "naturaleza humana" universal previa (Kant, Voltaire, Diderot): aunque ya no haya Dios, seguiria habiendo una esencia que define de antemano lo que el hombre es.',
            'Sartre rechaza esa logica para el ser humano. Si Dios no existe, no hay ningun artesano que haya concebido un modelo previo de hombre, y por lo tanto no hay esencia pensada antes de nuestra existencia. El ser humano no viene terminado: no es una cosa fija como una piedra o un abrecartas, sino un proyecto que se proyecta hacia el futuro y se va haciendo. "El hombre no es otra cosa que lo que el se hace."',
            'Por eso la logica del abrecartas no se aplica al ser humano: en el objeto, la idea (esencia) manda sobre la existencia; en el hombre, en cambio, primero se existe y despues uno se define por lo que hace con esa existencia. Esa inversion es la base de toda la filosofia de la libertad y la responsabilidad que Sartre desarrolla a continuacion.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Jean-Paul Sartre — El existencialismo es un humanismo (pp. 21-40)',
              path: '/content/parciales/segundo_parcial/contenido/el_existencialismo_es_un_humanismo_sartre.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 6,
          question:
            'Por que para Sartre el hombre, al elegirse a si mismo, elige al mismo tiempo a toda la humanidad? Explique como se relaciona esta idea con la nocion de angustia y por que esta no conduce, segun Sartre, al quietismo ni a la inaccion.',
          inScope: true,
          answer: [
            'Si no hay una esencia previa, el ser humano es responsable de lo que llega a ser: el primer paso del existencialismo es ponerlo en posesion de lo que es y hacer recaer sobre el la responsabilidad total de su existencia. Pero esa responsabilidad no es solo individual. Cuando elijo que tipo de persona quiero ser, estoy proponiendo a la vez una imagen de lo que creo que el ser humano debe ser: al elegir algo, lo presento como valioso. Por eso Sartre dice "al elegirme, elijo al hombre".',
            'No hay actos puramente privados: hasta la decision mas intima expresa una idea de humanidad. Si me resigno ante una injusticia, no estoy diciendo apenas "yo me resigno", sino que afirmo que la resignacion es una conducta valida para cualquiera. Casarse, militar, combatir, mentir: toda eleccion tiene un alcance universal porque presenta un modelo de vida humana como deseable. Asi, cada uno es responsable de si mismo y de todos.',
            'De esa responsabilidad nace la angustia. No es el miedo comun a una cosa concreta, sino la conciencia de que mi eleccion compromete una imagen del hombre y de que no puedo escaparle al peso de mis decisiones. El que esta angustiado se sabe una especie de legislador: decide para si y, al mismo tiempo, propone valores para toda la humanidad. La angustia esta pegada a la responsabilidad, no es algo aparte. Negarla —"da igual lo que yo haga, total no todos hacen lo mismo"— es para Sartre mala fe: esconderse del alcance universal del propio acto.',
            'Esta angustia no conduce al quietismo ni a la inaccion: forma parte de la accion responsable misma. El ejemplo es el del jefe militar que debe mandar soldados al combate: no puede esconderse detras de ordenes abstractas ni de excusas, tiene que decidir, y su decision compromete vidas; siente angustia precisamente porque conoce las consecuencias. La angustia no separa al ser humano de la accion, es parte de la accion.',
            'En la misma linea va el desamparo: que Dios no exista significa que no hay valores dados de antemano en un cielo inteligible ni mandamientos eternos que garanticen nuestras elecciones. Pero eso no quiere decir "todo da igual" ni caos moral: significa que estamos solos, sin excusas, y que somos nosotros mismos quienes creamos los valores con nuestros actos. Por eso el existencialismo no es pesimismo pasivo, sino un optimismo exigente: una filosofia de la libertad y la responsabilidad, no de la paralisis.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Jean-Paul Sartre — El existencialismo es un humanismo (pp. 21-40)',
              path: '/content/parciales/segundo_parcial/contenido/el_existencialismo_es_un_humanismo_sartre.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 7,
          question:
            'Explique que entiende Simone de Beauvoir por la mujer como "Alteridad". Por que senala que la categoria de Otro es "tan originaria como la conciencia misma" y como retoma para esto la dialectica hegeliana?',
          inScope: true,
          answer: [
            'La pregunta que ordena la Introduccion de El segundo sexo es "que es una mujer?". Beauvoir descarta dos respuestas faciles: el biologicismo (la mujer como simple hembra humana, una matriz) y el "eterno femenino" (una esencia femenina natural, permanente y misteriosa). Ninguna explica que significa, social, historica y existencialmente, ser mujer. La categoria clave no es la esencia sino la situacion: la posicion historica y social que la mujer ocupa.',
            'Sobre esa base aparece la tesis central: la humanidad se penso a si misma como masculina. El varon no necesita definirse como varon, se presenta sin mas como "ser humano", como lo universal; la mujer, en cambio, aparece marcada por su sexo, como lo particular, lo sexuado, lo limitado ("usted piensa eso porque es mujer"). El varon se afirma como Sujeto, Absoluto y Esencial; la mujer queda definida como lo Otro, la Alteridad, lo Inesencial: lo que se define en funcion del varon y relativamente a el. Eso es la mujer como Alteridad.',
            'Para fundamentarlo, Beauvoir retoma la dialectica hegeliana del reconocimiento entre conciencias. De Hegel toma la idea de que toda conciencia se afirma a si misma poniendo frente a si a otra como lo Otro: la categoria de Otro es "tan originaria como la conciencia misma" porque no hay un Uno que primero se constituya solo y despues encuentre a los demas, sino que el sujeto se pone como esencial enfrentando a un otro inesencial. Todo grupo humano tiende a definirse como "Uno" frente a un "Otro": el nativo frente al extranjero, una aldea frente a la de al lado. La alteridad es una estructura basica del pensamiento, no un accidente.',
            'Ahora bien, en la mayoria de los casos esa alteridad es reciproca: el extranjero tambien me ve a mi como extranjero, y el conflicto puede invertirse o equilibrarse cuando surge un "nosotros" reciproco. Lo propio de la situacion de la mujer es que esa reciprocidad no se realiza: el varon se afirma como sujeto y define a la mujer como alteridad, pero la mujer no logra historicamente dar vuelta la relacion y afirmarse, en conjunto, como sujeto frente a el. Por eso es un Otro absoluto, sin reciprocidad plena.',
            'En definitiva, Beauvoir usa a Hegel para mostrar que la alteridad es originaria, pero se separa de el para subrayar que, en el caso de la mujer, esa alteridad quedo congelada y unilateral: la mujer es la Alteridad en el corazon de una totalidad, ligada al varon por vinculos afectivos, sexuales, familiares y economicos, y a la vez subordinada a el como lo inesencial.',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Simone de Beauvoir — El segundo sexo, Introduccion (pp. 47-64)',
              path: '/content/parciales/segundo_parcial/contenido/el_segundo_sexo.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
        {
          number: 8,
          question:
            'Simone de Beauvoir compara la situacion de las mujeres con la de otros grupos oprimidos (proletarios, negros, judios) pero senala una diferencia fundamental. Cual es esa diferencia y que es lo que hace que las mujeres no hayan podido constituirse todavia como un "nosotras"?',
          inScope: true,
          answer: [
            'Beauvoir se pregunta por que las mujeres no cuestionaron de raiz la soberania masculina, como si lo hicieron otros grupos oprimidos. La diferencia fundamental es que las mujeres no forman una minoria separada ni un grupo con una historia autonoma: viven dispersas entre los varones, integradas en la misma totalidad social que las subordina.',
            'A diferencia de los proletarios, los negros o los judios, las mujeres no tienen un territorio propio, ni una historia separada, ni una religion propia, ni una solidaridad de clase comun, ni una comunidad espacial equivalente a un gueto, una fabrica o una colonia. Justamente esos elementos son los que permiten a otros grupos decir "nosotros" y organizar una lucha o una rebelion.',
            'Ademas, los vinculos que cada mujer tiene la atan mas a los varones de su propio grupo que a las otras mujeres: una mujer burguesa suele estar mas unida a su marido burgues que a una mujer proletaria; una mujer blanca, mas vinculada a los varones blancos que a las mujeres negras. La division por clase y por raza atraviesa al conjunto de las mujeres e impide la solidaridad que daria lugar a un "nosotras". Por eso les cuesta tanto decir "nosotras" y muchas veces terminan adoptando las palabras con que los varones las nombran: "las mujeres".',
            'Hay todavia algo mas profundo. La relacion entre los sexos no se parece del todo a ninguna otra opresion porque atraviesa la vida humana desde adentro: sexualidad, reproduccion, familia, convivencia, deseo, amor. El proletariado puede proponerse eliminar a la burguesia y el colonizado al colonizador, pero las mujeres no pueden ni quieren eliminar a los varones: estan ligadas a ellos por un vinculo necesario. La mujer es, por eso, la Alteridad en el corazon de una totalidad.',
            'A esto se suma la complicidad posible con la propia alteridad. Afirmarse como sujeto implica riesgos: libertad, responsabilidad, incertidumbre, independencia, la angustia de inventar los propios fines. Aceptar el lugar de Otro ofrece, en cambio, ciertas ventajas: la proteccion masculina, la seguridad material, el reconocimiento social y el alivio de no tener que asumir la propia libertad. Es un camino alienante pero tentador (el escape existencialista de la libertad). Esa dispersion, la falta de una historia y una solidaridad comunes, el vinculo necesario con el varon y la complicidad con la inmanencia explican, juntos, por que las mujeres no han podido constituirse todavia como un "nosotras".',
          ].join('\n\n'),
          references: [
            {
              source: 'docente',
              document: 'Simone de Beauvoir — El segundo sexo, Introduccion (pp. 47-64)',
              path: '/content/parciales/segundo_parcial/contenido/el_segundo_sexo.pdf',
            },
            {
              source: 'generado',
              document: 'La Caida de los Absolutos',
              path: '/content/parciales/segundo_parcial/material_generado/la_caida_de_los_absolutos.pdf',
            },
          ],
        },
      ],
    },
  },
];
