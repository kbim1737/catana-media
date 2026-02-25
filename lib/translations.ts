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
    projectProduction: string
    projectAudio: string
    projectVideo: string
    projectPhoto: string
    projectSocialMedia: string
    projectEditing: string
    projectEvents: string
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
    quote1: string
    quote2: string
    quote3: string
  }
  // Portfolio
  portfolio: {
    filterAll: string
    filterVideography: string
    filterAudio: string
    filterPhotography: string
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
      projectProduction: "Production",
      projectAudio: "Audio",
      projectVideo: "Video",
      projectPhoto: "Photo",
      projectSocialMedia: "Social Media Operations",
      projectEditing: "Editing",
      projectEvents: "Events",
      buttonSend: "Send Message",
      buttonSending: "Sending...",
      buttonSent: "Message Sent!",
      buttonError: "Failed \u2014 Try Again",
    },
    testimonials: {
      title: "Testimonials",
      roleRecordingArtist: "Recording Artist",
      roleEPShowrunner: "EP/Showrunner",
      quote1: "Kristof doesn't just direct videos -- he builds entire universes around the music. Every project we've done together has been a career-defining moment.",
      quote2: "The attention to detail is insane. He showed up with a vision that was ten times bigger than what I imagined, and he delivered on every single frame.",
      quote3: "Chris Catana is the epitome of a hands-on, efficient producer \u2014 the kind of person every production needs on the ground. Over the course of our time working together, Chris demonstrated a level of versatility that is genuinely rare in television. Chris is a true jack of all trades, and more importantly, he executes at a high level across all of them. Any production would be fortunate to have him.",
    },
    portfolio: {
      filterAll: "All",
      filterVideography: "Videography",
      filterAudio: "Audio",
      filterPhotography: "Photography",
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
      projectProduction: "Producci\u00f3n",
      projectAudio: "Audio",
      projectVideo: "Video",
      projectPhoto: "Foto",
      projectSocialMedia: "Operaciones de Redes Sociales",
      projectEditing: "Edici\u00f3n",
      projectEvents: "Eventos",
      buttonSend: "Enviar Mensaje",
      buttonSending: "Enviando...",
      buttonSent: "\u00a1Mensaje Enviado!",
      buttonError: "Fall\u00f3 \u2014 Intentar de Nuevo",
    },
    testimonials: {
      title: "Testimonios",
      roleRecordingArtist: "Artista Musical",
      roleEPShowrunner: "EP/Showrunner",
      quote1: "Kristof no solo dirige videos — construye universos enteros alrededor de la música. Cada proyecto que hemos hecho juntos ha sido un momento definitorio en mi carrera.",
      quote2: "La atención al detalle es increíble. Llegó con una visión diez veces más grande de lo que imaginé, y cumplió en cada fotograma.",
      quote3: "Chris Catana es el ejemplo perfecto de un productor práctico y eficiente — el tipo de persona que toda producción necesita en el terreno. A lo largo de nuestro tiempo trabajando juntos, Chris demostró un nivel de versatilidad genuinamente raro en televisión. Chris es un verdadero todoterreno y, lo que es más importante, ejecuta a un alto nivel en todos los ámbitos. Cualquier producción tendría suerte de contar con él.",
    },
    portfolio: {
      filterAll: "Todos",
      filterVideography: "Videograf\u00eda",
      filterAudio: "Audio",
      filterPhotography: "Fotograf\u00eda",
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
      sameStandards: "Azonos Szint",
      aroundTheWorld: "Mindenhol a Vil\u00e1gon",
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
      projectProduction: "Produkci\u00f3",
      projectAudio: "Audi\u00f3",
      projectVideo: "Vide\u00f3",
      projectPhoto: "Fot\u00f3",
      projectSocialMedia: "K\u00f6z\u00f6ss\u00e9gi M\u00e9dia Kezel\u00e9s",
      projectEditing: "V\u00e1g\u00e1s",
      projectEvents: "Rendezv\u00e9nyek",
      buttonSend: "\u00dczenet K\u00fcld\u00e9se",
      buttonSending: "K\u00fcld\u00e9s...",
      buttonSent: "\u00dczenet Elk\u00fcldve!",
      buttonError: "Sikertelen \u2014 Pr\u00f3b\u00e1ld \u00dajra",
    },
    testimonials: {
      title: "V\u00e9lem\u00e9nyek",
      roleRecordingArtist: "Zenei El\u0151ad\u00f3",
      roleEPShowrunner: "EP/Showrunner",
      quote1: "Krist\u00f3f nem csup\u00e1n vide\u00f3kat rendez \u2014 komplett univerzumokat \u00e9p\u00edt a zene k\u00f6r\u00e9. Minden k\u00f6z\u00f6s projekt\u00fcnk karrierem meghat\u00e1roz\u00f3 pillanata volt.",
      quote2: "A r\u00e9szletekre val\u00f3 odafigyel\u00e9se hihetetlen. Olyan v\u00edzi\u00f3val \u00e9rkezett, ami t\u00edzszer nagyobb volt ann\u00e1l, amit elk\u00e9pzeltem, \u00e9s minden egyes kock\u00e1t t\u00f6k\u00e9letesen megval\u00f3s\u00edtott.",
      quote3: "Chris Catana a megtest\u00e9s\u00edt\u0151je a gyakorlatias, hat\u00e9kony producernek \u2014 az a fajta ember, akire minden produkci\u00f3nak sz\u00fcks\u00e9ge van a terepen. A k\u00f6z\u00f6s munk\u00e1nk sor\u00e1n Chris olyan szint\u0171 sokoldal\u00fas\u00e1got mutatott, ami a telev\u00edzi\u00f3s vil\u00e1gban val\u00f3ban ritka. Chris egy igazi ezermester, \u00e9s ami m\u00e9g fontosabb, mindegyik ter\u00fcleten magas szinten teljes\u00edt. B\u00e1rmelyik produkci\u00f3 szerencs\u00e9s lenne, ha vele dolgozhatna.",
    },
    portfolio: {
      filterAll: "Mind",
      filterVideography: "Videogr\u00e1fia",
      filterAudio: "Audi\u00f3",
      filterPhotography: "Fot\u00f3",
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
      projectProduction: "Produc\u021bie",
      projectAudio: "Audio",
      projectVideo: "Video",
      projectPhoto: "Foto",
      projectSocialMedia: "Opera\u021biuni Social Media",
      projectEditing: "Editare",
      projectEvents: "Evenimente",
      buttonSend: "Trimite Mesaj",
      buttonSending: "Se trimite...",
      buttonSent: "Mesaj Trimis!",
      buttonError: "E\u0219uat \u2014 \u00cencerc\u0103 Din Nou",
    },
    testimonials: {
      title: "Testimoniale",
      roleRecordingArtist: "Artist Muzical",
      roleEPShowrunner: "EP/Showrunner",
      quote1: "Kristof nu doar regizeaz\u0103 videoclipuri \u2014 el construie\u0219te universuri \u00eentregi \u00een jurul muzicii. Fiecare proiect pe care l-am realizat \u00eempreun\u0103 a fost un moment definitoriu \u00een cariera mea.",
      quote2: "Aten\u021bia la detalii este incredibil\u0103. A venit cu o viziune de zece ori mai mare dec\u00e2t ce \u00eemi imaginasem, \u0219i a livrat \u00een fiecare cadru.",
      quote3: "Chris Catana este exemplul perfect al unui produc\u0103tor practic \u0219i eficient \u2014 genul de persoan\u0103 de care fiecare produc\u021bie are nevoie pe teren. Pe parcursul colabor\u0103rii noastre, Chris a demonstrat un nivel de versatilitate cu adev\u0103rat rar \u00een televiziune. Chris este un adev\u0103rat om bun la toate, \u0219i mai important, execut\u0103 la un nivel \u00eenalt \u00een fiecare domeniu. Orice produc\u021bie ar fi norocoas\u0103 s\u0103 \u00eel aib\u0103.",
    },
    portfolio: {
      filterAll: "Toate",
      filterVideography: "Videografie",
      filterAudio: "Audio",
      filterPhotography: "Fotografie",
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
