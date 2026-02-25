export interface Project {
  id: string
  title: string
  artist: string
  role: string
  category: string
  year: string
}

export const projects: Project[] = [
  {
    id: "QtUx9y_P8KY",
    title: "Paul Walker",
    artist: "MaxThaDemon & 917 Rackz",
    role: "Director",
    category: "Videography",
    year: "2025",
  },
  {
    id: "sXPA_7Vvv98",
    title: "Traffic Jam",
    artist: "Ola Runt",
    role: "Director & Editor",
    category: "Videography",
    year: "2025",
  },
  {
    id: "3MaYA5xI57M",
    title: "TARZAN",
    artist: "Lefty Gunplay",
    role: "Cinematographer",
    category: "Videography",
    year: "2024",
  },
  {
    id: "l8-Y1zVDOww",
    title: "J ALLEY",
    artist: "Jugg Harden",
    role: "Director",
    category: "Videography",
    year: "2024",
  },
  {
    id: "z_vn2CX7tMY",
    title: "ALL STARS",
    artist: "Big Sad 1900",
    role: "Director & Cinematographer",
    category: "Videography",
    year: "2024",
  },
  {
    id: "cN8eor4XuLE",
    title: "The GoodTalk Show Ep. #32",
    artist: "Wiz Khalifa",
    role: "Director",
    category: "Videography",
    year: "2024",
  },
  {
    id: "F17WAJWJcgQ",
    title: "Follow My Recipe #1",
    artist: "OhGeesy",
    role: "Editor",
    category: "Videography",
    year: "2024",
  },
]

export const categories = ["All", "Videography", "Audio", "Photography"] as const
export type Category = (typeof categories)[number]
