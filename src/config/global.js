export default {
  global: {
    componenteFormativo:
      '<em>Pitch</em> de la propuesta del proyecto multimedia',
    descripcionCurso:
      'A través de este componente se conocerán diversas herramientas tecnológicas para la realización de una buena propuesta de proyecto multimedia, a partir de textos, gráficos, imágenes, audios y animaciones de interactividad; además, se revisará el cómo realizar una buena estructura narrativa. Todo esto para la realización de un<em>pitch</em> exitoso y su debida exposición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas tecnológicas y narrativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas tecnológicas para presentaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructuras narrativas para el guion de la presentación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Textos narrativos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Guion de multimedia',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de presentación del <em>pitch</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de <em>pitch</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de presentación verbal y no verbal',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              '¿Cómo se proyecta un <em>pitch</em> empleando técnicas verbal y no verbal?',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Presentación, formatos y estructura de un <em>pitch</em>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              '¿Qué no se debe hacer al momento de exponer un <em>pitch</em>?',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas tecnológicas y narrativas',
      referencia:
        'Chiappe, D. (2015). Forma y fondo de la narrativa multimedia. [Tesis doctoral]. Departamento de Humanidades Universidad Carlos III de Madrid. ',
      tipo: 'Articulo.',
      link:
        'https://e-archivo.uc3m.es/bitstream/handle/10016/21983/tesis_domenico_chiappe.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema: 'Herramientas tecnológicas y narrativas',
      referencia:
        'Gama Castro, M., & León Reyes, F. (2020). El uso de la tecnología en el desarrollo de narrativas digitales y minijuegos serios: Caso tradición oral en Bogotá. CULTURA EDUCACIÓN Y SOCIEDAD, 11(2), 251-269. https://doi.org/10.17981/cultedusoc.11.2.2020.16',
      tipo: 'Articulo.',
      link:
        'https://revistascientificas.cuc.edu.co/culturaeducacionysociedad/article/view/2648/2993',
    },
    {
      tema: 'Herramientas tecnológicas y narrativas',
      referencia:
        'Uría, m. (2015). Tutorial ¿cómo trabajar con <em>glogster</em>?.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=T-aIejCeUQA',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia: 'CoxM, B. (2016). Cómo hacer un <em>Pitch</em>.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=554Fwv7jQMI',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia: 'Torres, C. (2020). Lenguaje Verbal.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=cLS-m__k0NA',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia:
        '<em>Prouzet, E. (2017). The best "Elevator Pitch" of the World?</em>.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=FrIfes1L7NI',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia:
        'Reveco, P. (2018). Video <em>pitch</em> Natural <em>Vending</em>, Joven emprendedor Sercotec 2018.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=FrIfes1L7NI',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia:
        'Hemisferio Derecho. (2018) Lenguaje no verbal - la guía de las manos.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=Ti2JZfKw9cA',
    },
    {
      tema: 'Técnicas de presentación del <em>pitch</em>',
      referencia:
        'Sercotec, Servicio de Cooperación Técnica. (2019).  <em>Elevator Pitch</em>: Presentaciones efectivas.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=r8J6oi3afds',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento en la nube',
      significado:
        'El almacenamiento en la nube funciona como una red de servidores de datos conectados que se utilizan colectivamente para compartir tus archivos a través de dispositivos y acceder a ellos. Ejemplos: <em>Google drive, Office 365, Dropbox</em>, etc.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Una base de datos es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema de computadora. Una base de datos es usualmente controlada por un sistema de gestión de base de datos (DBMS).',
    },
    {
      termino: 'Guion',
      significado:
        'Esquema escrito de un discurso, conferencia, tema, etc., que contiene los puntos o cuestiones que se van a tratar.',
    },
    {
      termino: 'Idea de negocio',
      significado: 'Es el producto o servicio que quiero ofrecer al mercado.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Una interfaz se utiliza en informática para nombrar a la conexión funcional entre dos sistemas, programas, dispositivos o componentes de cualquier tipo, que proporciona una comunicación de distintos niveles, permitiendo el intercambio de información. Esto es un ejemplo de la realidad virtual.',
    },
    {
      termino: 'Inversor',
      significado:
        'Un inversor es cualquier persona que destina capital a una inversión con el objetivo de obtener beneficios, los inversores suelen tener una actitud diferente respecto a la inversión que los denominados <em>traders</em>.',
    },
    {
      termino: 'Lenguaje',
      significado:
        'El lenguaje es un sistema de signos a través del cual los individuos se comunican entre sí. Estos signos pueden ser sonoros (como el habla), corporales (como los gestos) o gráficos (como la escritura).',
    },
    {
      termino: 'Oferta de valor',
      significado:
        'Es un recurso para transmitir de manera objetiva y directa las ventajas que una empresa puede aportar a sus clientes.',
    },
    {
      termino: '<em>Pitch</em>',
      significado:
        'Hace referencia a una presentación verbal (y visual) concisa de una idea',
    },
    {
      termino: 'Ponente',
      significado:
        'Los ponentes son todas aquellas personas que participan en un evento o congreso con el fin de realizar una exposición sobre un tema concreto.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'Son las personas a quienes tu negocio está destinado, porque de alguna manera se identifican con tu producto o servicio.',
    },
    {
      termino: '<em>Storyboard</em>',
      significado:
        'Es un conjunto de ilustraciones presentadas de forma secuencial con el objetivo de servir de guía para entender una historia, previsualizar una animación o planificar la estructura de una película.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angélica, A. (2020). Formato de <em>pitch deck</em>: las diapositivas que deben ser incluidas. ',
      link: 'https://es.slidebean.com/blog/startups-pitch-deck-format',
    },
    {
      referencia:
        'Cámara de comercio de Bogotá. (s.f.). Estructura y Presenta el <em>pitch</em> de tu empresa.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/25592/Estructura%20y%20Presenta%20el%20pitch%20de%20tu%20empresa.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Chiappe, D. (2015). Forma y fondo de la narrativa multimedia. [Tesis doctoral]. Departamento de Humanidades Universidad Carlos III de Madrid.',
      link:
        'https://docplayer.es/amp/12221995-Tesis-doctoral-forma-y-fondo-de-la-narrativa-multimedia.html ',
    },
    {
      referencia:
        'Cinedidacta. (s.f.). La estructura narrativa: cómo hacer que tu guion funcione de principio a fin. ',
      link: 'https://cinedidacta.com/estructura-narrativa/ ',
    },
    {
      referencia:
        'Fernández, H. (s.f.). Elevator pitch: Qué es, cómo hacerlo, ejemplos y plantilla.',
      link: 'https://economiatic.com/elevator-pitch/',
    },
    {
      referencia:
        '<em>Glogster</em>. (2021). Cómo funciona <em>Glogster</em> Vea nuestros usos principales, con sencillos pasos para crear su propio póster multimedia.',
      link: 'https://edu.glogster.com/',
    },
    {
      referencia:
        'Hernández, A. (2014). Narrativas transmediáticas en entornos digitales: la novela hipermedia Inanimate Alice y sus aplicaciones docentes. CIC. Cuadernos de Información y Comunicación. Vol. 19, enero-diciembre.',
      link: 'https://www.redalyc.org/pdf/935/93530573017.pdf',
    },
    {
      referencia:
        'Jiménez, A. (2017). Todo lo que necesitas saber sobre comunicación verbal y no verbal.',
      link:
        'https://www.elblogsalmon.com/marketing-y-publicidad/todo-lo-que-necesitas-saber-sobre-comunicacion-verbal-y-no-verbal',
    },
    {
      referencia:
        'León, F. y Gama, M. (2020). El uso de la tecnología en el desarrollo de narrativas digitales y minijuegos serios: Caso tradición oral en Bogotá.',
      link:
        'https://revistascientificas.cuc.edu.co/culturaeducacionysociedad/article/view/2648/2961',
    },
    {
      referencia:
        'Marcos, C. (s.f.). ¿Qué es un <em>Pitch</em> y cómo prepararlo? Los mejores consejos.',
      link: 'https://blog.genial.ly/que-es-pitch/',
    },
    {
      referencia:
        'Robin, B. (2006). The Educational Uses of Digital storytelling. Proceedings of Society for Information Technology & Teacher Education International Conference 2006, (1), 709-716. http://digitalstorytelling.coe.uh.edu/articles/Educ-Uses-DS.pdf',
    },
    {
      referencia:
        'Support.apple.com. (2021). Manual del usuario de <em>Keynote</em> para Mac',
      link: 'https://support.apple.com/es-cl/guide/keynote/welcome/mac ',
    },
    {
      referencia:
        'YOS Coaching y comunicación. (s.f.). ¿Qué Es Elevator <em>Pitch</em> Y Cómo Se Hace? Guía De 5 Pasos Para Crear El Tuyo.',
      link:
        'https://www.yoscoaching.com/blog/elevator-pitch-que-es-como-hacer-guia-ejemplo/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica.  - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesus Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
