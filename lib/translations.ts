export type Locale = "en" | "es" | "hu" | "ro"

export interface TranslationStrings {
  // Nav
  nav: {
    portfolio: string
    about: string
    inquiries: string
    back: string
  }
  // Landing
  landing: {
    subtitle: string
    sameStandards: string
    aroundTheWorld: string
  }
  // About
  about: {
    label: string
    heading: string
    bio1: string
    bio2: string
    bio3: string
    statVideos: string
    statViews: string
    statArtists: string
  }
  // Contact
  contact: {
    heading: string
    headingAccent: string
    description: string
    labelName: string
    labelEmail: string
    labelProject: string
    labelMessage: string
    placeholderName: string
    placeholderEmail: string
    placeholderProject: string
    placeholderMessage: string
    projectMusicVideo: string
    projectVisualAlbum: string
    projectShortFilm: string
    projectCommercial: string
    projectOther: string
    buttonSend: string
    buttonSending: string
    buttonSent: string
    buttonError: string
  }
  // Testimonials
  testimonials: {
    title: string
    roleRecordingArtist: string
    roleEPShowrunner: string
  }
  // Portfolio
  portfolio: {
    filterAll: string
    ariaClose: string
    ariaPrev: string
    ariaNext: string
  }
  // Worked With
  workedWith: {
    title: string
  }
  // Marquee
  marquee: {
    creativeDirection: string
    livePerformance: string
    audio: string
    video: string
    photo: string
    preProduction: string
    production: string
    postProduction: string
    editing: string
    socialMedia: string
    events: string
  }
  // Theme
  theme: {
    switchToLight: string
    switchToDark: string
  }
  // SEO
  meta: {
    title: string
    description: string
    keywords: string
  }
}

export const translations: Record<Locale, TranslationStrings> = {
  en: {
    nav: {
      portfolio: "Portfolio",
      about: "About",
      inquiries: "Inquiries",
      back: "Back",
    },
    landing: {
      subtitle: "Creative Multimedia Director",
      sameStandards: "Same Standards",
      aroundTheWorld: "Around the World",
    },
    about: {
      label: "About",
      heading: "Turning Dreams Into a Reality",
      bio1: "Hey! My name is Christopher Catana \u2013 I have been passionate about all forms of art & media since I was very young. Through the years of learning and networking, I have reached the point where I make others\u2019 dreams and imaginations become a reality!",
      bio2: "I don\u2019t just point a camera. I immerse myself in the project. I work closely with every client to understand what your media platform or art needs to achieve the goals we set. Then we start constructing foundations and pillars to make processes and goals easier and faster to achieve! From Indie shoots to high-end productions, the standards stay the same.",
      bio3: "300M+ views and counting, but the numbers aren\u2019t the point. The point is making something that artists and fans keep coming back to watch.",
      statVideos: "Videos/Shorts Shot & Directed",
      statViews: "Total Views",
      statArtists: "Artists & Clients",
    },
    contact: {
      heading: "Let\u2019s Create\nSomething",
      headingAccent: "Iconic",
      description: "Indie Or Major -- I bring the same energy and attention to every project.",
      labelName: "Name",
      labelEmail: "Email",
      labelProject: "Project Type",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "your@email.com",
      placeholderProject: "Select a project type",
      placeholderMessage: "Tell me about your vision...",
      projectMusicVideo: "Music Video",
      projectVisualAlbum: "Visual Album",
      projectShortFilm: "Short Film",
      projectCommercial: "Commercial",
      projectOther: "Other",
      buttonSend: "Send Message",
      buttonSending: "Sending...",
      buttonSent: "Message Sent!",
      buttonError: "Failed \u2014 Try Again",
    },
    testimonials: {
      title: "Testimonials",
      roleRecordingArtist: "Recording Artist",
      roleEPShowrunner: "EP/Showrunner",
    },
    portfolio: {
      filterAll: "All",
      ariaClose: "Close",
      ariaPrev: "Previous video",
      ariaNext: "Next video",
    },
    workedWith: {
      title: "Worked With",
    },
    marquee: {
      creativeDirection: "Creative Direction",
      livePerformance: "Live Performance",
      audio: "AUDIO",
      video: "VIDEO",
      photo: "PHOTO",
      preProduction: "PRE PRODUCTION",
      production: "PRODUCTION",
      postProduction: "POST PRODUCTION",
      editing: "EDITING",
      socialMedia: "SOCIAL MEDIA OPERATIONS",
      events: "EVENTS",
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    meta: {
      title: "CATANA MEDIA | Creative Multimedia Director",
      description: "Christopher Catana \u2013 creative multimedia director crafting cinematic experiences for artists. From concept to screen, music videos, creative direction, video production, and more.",
      keywords: "music video director, creative direction, video production, live performance, audio, photo, editing, social media, events, Christopher Catana, CATANA MEDIA",
    },
  },

  es: {
    nav: {
      portfolio: "Portafolio",
      about: "Sobre M\u00ed",
      inquiries: "Consultas",
      back: "Volver",
    },
    landing: {
      subtitle: "Director Multimedia Creativo",
      sameStandards: "Mismos Est\u00e1ndares",
      aroundTheWorld: "Alrededor del Mundo",
    },
    about: {
      label: "Sobre M\u00ed",
      heading: "Convirtiendo Sue\u00f1os en Realidad",
      bio1: "\u00a1Hola! Mi nombre es Christopher Catana \u2013 he sido apasionado por todas las formas de arte y medios desde muy joven. A trav\u00e9s de a\u00f1os de aprendizaje y networking, he llegado al punto donde hago que los sue\u00f1os e imaginaciones de otros se conviertan en realidad!",
      bio2: "No solo apunto una c\u00e1mara. Me sumerjo en el proyecto. Trabajo de cerca con cada cliente para entender lo que tu plataforma de medios o arte necesita para alcanzar los objetivos que establecemos. \u00a1Luego comenzamos a construir cimientos y pilares para hacer los procesos y objetivos m\u00e1s f\u00e1ciles y r\u00e1pidos de alcanzar! Desde producciones independientes hasta producciones de alto nivel, los est\u00e1ndares se mantienen iguales.",
      bio3: "M\u00e1s de 300M de visualizaciones y contando, pero los n\u00fameros no son lo importante. Lo importante es crear algo a lo que los artistas y fans sigan volviendo a ver.",
      statVideos: "Videos/Shorts Filmados y Dirigidos",
      statViews: "Vistas Totales",
      statArtists: "Artistas y Clientes",
    },
    contact: {
      heading: "Creemos\nAlgo",
      headingAccent: "Ic\u00f3nico",
      description: "Independiente o Major \u2013 traigo la misma energ\u00eda y atenci\u00f3n a cada proyecto.",
      labelName: "Nombre",
      labelEmail: "Correo",
      labelProject: "Tipo de Proyecto",
      labelMessage: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@correo.com",
      placeholderProject: "Selecciona un tipo de proyecto",
      placeholderMessage: "Cu\u00e9ntame sobre tu visi\u00f3n...",
      projectMusicVideo: "Video Musical",
      projectVisualAlbum: "\u00c1lbum Visual",
      projectShortFilm: "Cortometraje",
      projectCommercial: "Comercial",
      projectOther: "Otro",
      buttonSend: "Enviar Mensaje",
      buttonSending: "Enviando...",
      buttonSent: "\u00a1Mensaje Enviado!",
      buttonError: "Fall\u00f3 \u2014 Intentar de Nuevo",
    },
    testimonials: {
      title: "Testimonios",
      roleRecordingArtist: "Artista Musical",
      roleEPShowrunner: "EP/Showrunner",
    },
    portfolio: {
      filterAll: "Todos",
      ariaClose: "Cerrar",
      ariaPrev: "Video anterior",
      ariaNext: "Siguiente video",
    },
    workedWith: {
      title: "Colaboraciones",
    },
    marquee: {
      creativeDirection: "Direcci\u00f3n Creativa",
      livePerformance: "Presentaci\u00f3n en Vivo",
      audio: "AUDIO",
      video: "VIDEO",
      photo: "FOTO",
      preProduction: "PRE PRODUCCI\u00d3N",
      production: "PRODUCCI\u00d3N",
      postProduction: "POST PRODUCCI\u00d3N",
      editing: "EDICI\u00d3N",
      socialMedia: "OPERACIONES DE REDES SOCIALES",
      events: "EVENTOS",
    },
    theme: {
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
    meta: {
      title: "CATANA MEDIA | Director Multimedia Creativo",
      description: "Christopher Catana \u2013 director multimedia creativo que crea experiencias cinem\u00e1ticas para artistas. Del concepto a la pantalla, videos musicales, direcci\u00f3n creativa, producci\u00f3n de video y m\u00e1s.",
      keywords: "director de videos musicales, direcci\u00f3n creativa, producci\u00f3n de video, presentaci\u00f3n en vivo, audio, foto, edici\u00f3n, redes sociales, eventos, Christopher Catana, CATANA MEDIA",
    },
  },

  hu: {
    nav: {
      portfolio: "Portf\u00f3li\u00f3",
      about: "R\u00f3lam",
      inquiries: "\u00c9rdekl\u0151d\u00e9s",
      back: "Vissza",
    },
    landing: {
      subtitle: "Kreat\u00edv Multim\u00e9dia Rendez\u0151",
      sameStandards: "Ugyanazok a Sztenderdek",
      aroundTheWorld: "Vil\u00e1gszerte",
    },
    about: {
      label: "R\u00f3lam",
      heading: "\u00c1lmokat Val\u00f3s\u00e1gra V\u00e1ltok",
      bio1: "Szia! A nevem Christopher Catana \u2013 gyerekkorom \u00f3ta rajongok a m\u0171v\u00e9szet \u00e9s a m\u00e9dia minden form\u00e1j\u00e1\u00e9rt. Az \u00e9vek sor\u00e1n szerzett tanul\u00e1s \u00e9s kapcsolat\u00e9p\u00edt\u00e9s r\u00e9v\u00e9n elértem azt a pontot, ahol m\u00e1sok \u00e1lmait \u00e9s elk\u00e9pzel\u00e9seit val\u00f3s\u00e1gra v\u00e1ltom!",
      bio2: "Nem csak kamer\u00e1t tartok. Belemerülök a projektbe. Szorosan egy\u00fcttm\u0171k\u00f6d\u00f6m minden \u00fcgyf\u00e9llel, hogy meg\u00e9rtsem, mire van sz\u00fcks\u00e9ge a m\u00e9dia platformodnak vagy m\u0171v\u00e9szetednek a kit\u0171z\u00f6tt c\u00e9lok el\u00e9r\u00e9s\u00e9hez. Azut\u00e1n elkezd\u00fcnk alapokat \u00e9s pill\u00e9reket \u00e9p\u00edteni, hogy a folyamatok \u00e9s c\u00e9lok k\u00f6nnyebben \u00e9s gyorsabban el\u00e9rhet\u0151ek legyenek! Az indie forgat\u00e1sokt\u00f3l a csúcskateg\u00f3ri\u00e1s produkci\u00f3kig a sztenderdek ugyanazok maradnak.",
      bio3: "T\u00f6bb mint 300M megtekint\u00e9s \u00e9s ez egyre n\u0151, de nem a sz\u00e1mok a l\u00e9nyeg. A l\u00e9nyeg az, hogy olyat alkossunk, amit a m\u0171v\u00e9szek \u00e9s rajong\u00f3k \u00fajra \u00e9s \u00fajra visszaj\u00f6nnek megn\u00e9zni.",
      statVideos: "Forgatott \u00e9s Rendezett Vide\u00f3k/Shortok",
      statViews: "\u00d6sszes Megtekint\u00e9s",
      statArtists: "M\u0171v\u00e9szek \u00e9s \u00dcgyfelek",
    },
    contact: {
      heading: "Alkossunk\nValami",
      headingAccent: "Ikonikusat",
      description: "Indie vagy Major \u2013 ugyanazt az energi\u00e1t \u00e9s figyelmet hozom minden projektbe.",
      labelName: "N\u00e9v",
      labelEmail: "Email",
      labelProject: "Projekt T\u00edpusa",
      labelMessage: "\u00dczenet",
      placeholderName: "A neved",
      placeholderEmail: "pelda@email.com",
      placeholderProject: "V\u00e1lassz projekt t\u00edpust",
      placeholderMessage: "Mes\u00e9lj a v\u00edzi\u00f3dr\u00f3l...",
      projectMusicVideo: "Zenei Vide\u00f3",
      projectVisualAlbum: "Vizu\u00e1lis Album",
      projectShortFilm: "R\u00f6vidfilm",
      projectCommercial: "Rekl\u00e1m",
      projectOther: "Egy\u00e9b",
      buttonSend: "\u00dczenet K\u00fcld\u00e9se",
      buttonSending: "K\u00fcld\u00e9s...",
      buttonSent: "\u00dczenet Elk\u00fcldve!",
      buttonError: "Sikertelen \u2014 Pr\u00f3b\u00e1ld \u00dajra",
    },
    testimonials: {
      title: "V\u00e9lem\u00e9nyek",
      roleRecordingArtist: "Zenei El\u0151ad\u00f3",
      roleEPShowrunner: "EP/Showrunner",
    },
    portfolio: {
      filterAll: "Mind",
      ariaClose: "Bez\u00e1r\u00e1s",
      ariaPrev: "El\u0151z\u0151 vide\u00f3",
      ariaNext: "K\u00f6vetkez\u0151 vide\u00f3",
    },
    workedWith: {
      title: "Egy\u00fcttm\u0171k\u00f6d\u00e9sek",
    },
    marquee: {
      creativeDirection: "Kreat\u00edv Ir\u00e1ny\u00edt\u00e1s",
      livePerformance: "\u00c9l\u0151 El\u0151ad\u00e1s",
      audio: "AUDI\u00d3",
      video: "VIDE\u00d3",
      photo: "FOT\u00d3",
      preProduction: "EL\u0150 PRODUKCI\u00d3",
      production: "PRODUKCI\u00d3",
      postProduction: "UT\u00d3 PRODUKCI\u00d3",
      editing: "V\u00c1G\u00c1S",
      socialMedia: "K\u00d6Z\u00d6SS\u00c9GI M\u00c9DIA KEZEL\u00c9S",
      events: "RENDEZV\u00c9NYEK",
    },
    theme: {
      switchToLight: "V\u00e1lt\u00e1s vil\u00e1gos m\u00f3dra",
      switchToDark: "V\u00e1lt\u00e1s s\u00f6t\u00e9t m\u00f3dra",
    },
    meta: {
      title: "CATANA MEDIA | Kreat\u00edv Multim\u00e9dia Rendez\u0151",
      description: "Christopher Catana \u2013 kreat\u00edv multim\u00e9dia rendez\u0151, aki filmes \u00e9lm\u00e9nyeket alkot m\u0171v\u00e9szeknek. A koncepci\u00f3t\u00f3l a k\u00e9perny\u0151ig, zenei vide\u00f3k, kreat\u00edv ir\u00e1ny\u00edt\u00e1s, vide\u00f3 produkci\u00f3 \u00e9s t\u00f6bb.",
      keywords: "zenei vide\u00f3 rendez\u0151, kreat\u00edv ir\u00e1ny\u00edt\u00e1s, vide\u00f3 produkci\u00f3, \u00e9l\u0151 el\u0151ad\u00e1s, audi\u00f3, fot\u00f3, v\u00e1g\u00e1s, k\u00f6z\u00f6ss\u00e9gi m\u00e9dia, rendezv\u00e9nyek, Christopher Catana, CATANA MEDIA",
    },
  },

  ro: {
    nav: {
      portfolio: "Portofoliu",
      about: "Despre Mine",
      inquiries: "Solicit\u0103ri",
      back: "\u00cenapoi",
    },
    landing: {
      subtitle: "Director Multimedia Creativ",
      sameStandards: "Acelea\u0219i Standarde",
      aroundTheWorld: "\u00cen Toat\u0103 Lumea",
    },
    about: {
      label: "Despre Mine",
      heading: "Transform Visele \u00een Realitate",
      bio1: "Salut! M\u0103 numesc Christopher Catana \u2013 am fost pasionat de toate formele de art\u0103 \u0219i media de c\u00e2nd eram foarte t\u00e2n\u0103r. De-a lungul anilor de \u00eenv\u0103\u021bare \u0219i networking, am ajuns \u00een punctul \u00een care transform visele \u0219i imagina\u021biile altora \u00een realitate!",
      bio2: "Nu doar \u00eendrept o camer\u0103. M\u0103 scufund \u00een proiect. Lucrez \u00eendeaproape cu fiecare client pentru a \u00een\u021belege ce are nevoie platforma ta media sau arta ta pentru a atinge obiectivele pe care le stabilim. Apoi \u00eencepem s\u0103 construim funda\u021bii \u0219i piloni pentru a face procesele \u0219i obiectivele mai u\u0219or \u0219i mai rapid de atins! De la produc\u021bii indie la produc\u021bii de top, standardele r\u0103m\u00e2n acelea\u0219i.",
      bio3: "Peste 300M de vizualiz\u0103ri \u0219i num\u0103r\u0103toarea continu\u0103, dar cifrele nu sunt esen\u021bialul. Esen\u021bialul este s\u0103 cre\u0103m ceva la care arti\u0219tii \u0219i fanii revin mereu s\u0103 se uite.",
      statVideos: "Videoclipuri/Shorturi Filmate \u0219i Regizate",
      statViews: "Vizualiz\u0103ri Totale",
      statArtists: "Arti\u0219ti \u0219i Clien\u021bi",
    },
    contact: {
      heading: "S\u0103 Cre\u0103m\nCeva",
      headingAccent: "Iconic",
      description: "Indie sau Major \u2013 aduc aceea\u0219i energie \u0219i aten\u021bie fiec\u0103rui proiect.",
      labelName: "Nume",
      labelEmail: "Email",
      labelProject: "Tip Proiect",
      labelMessage: "Mesaj",
      placeholderName: "Numele t\u0103u",
      placeholderEmail: "email@exemplu.com",
      placeholderProject: "Selecteaz\u0103 un tip de proiect",
      placeholderMessage: "Spune-mi despre viziunea ta...",
      projectMusicVideo: "Videoclip Muzical",
      projectVisualAlbum: "Album Vizual",
      projectShortFilm: "Scurtmetraj",
      projectCommercial: "Recl\u0103m\u0103",
      projectOther: "Altele",
      buttonSend: "Trimite Mesaj",
      buttonSending: "Se trimite...",
      buttonSent: "Mesaj Trimis!",
      buttonError: "E\u0219uat \u2014 \u00cencerc\u0103 Din Nou",
    },
    testimonials: {
      title: "Testimoniale",
      roleRecordingArtist: "Artist Muzical",
      roleEPShowrunner: "EP/Showrunner",
    },
    portfolio: {
      filterAll: "Toate",
      ariaClose: "\u00cenchide",
      ariaPrev: "Videoclipul anterior",
      ariaNext: "Urm\u0103torul videoclip",
    },
    workedWith: {
      title: "Colabor\u0103ri",
    },
    marquee: {
      creativeDirection: "Direc\u021bie Creativ\u0103",
      livePerformance: "Spectacol Live",
      audio: "AUDIO",
      video: "VIDEO",
      photo: "FOTO",
      preProduction: "PRE PRODUC\u021aIE",
      production: "PRODUC\u021aIE",
      postProduction: "POST PRODUC\u021aIE",
      editing: "EDITARE",
      socialMedia: "OPERA\u021aIUNI SOCIAL MEDIA",
      events: "EVENIMENTE",
    },
    theme: {
      switchToLight: "Comut\u0103 la modul luminos",
      switchToDark: "Comut\u0103 la modul \u00eentunecat",
    },
    meta: {
      title: "CATANA MEDIA | Director Multimedia Creativ",
      description: "Christopher Catana \u2013 director multimedia creativ care creeaz\u0103 experien\u021be cinematice pentru arti\u0219ti. De la concept la ecran, videoclipuri muzicale, direc\u021bie creativ\u0103, produc\u021bie video \u0219i multe altele.",
      keywords: "regizor videoclipuri muzicale, direc\u021bie creativ\u0103, produc\u021bie video, spectacol live, audio, foto, editare, social media, evenimente, Christopher Catana, CATANA MEDIA",
    },
  },
}
