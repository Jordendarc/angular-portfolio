export type Role = {
  company: string
  // links the company name to its site
  url?: string
  title: string
  dates: string
  // extra context shown under the title, e.g. a promotion
  note?: string
  highlights: string[]
}

export type Project = {
  name: string
  // small label next to the name, e.g. to mark client work
  badge?: string
  description: string
  tech: string[]
  liveUrl?: string
  sourceUrl?: string
}

export type Skill = {
  name: string
  detail: string
}

export type DatedItem = {
  name: string
  detail?: string
  date: string
}

export type Content = {
  meta: {
    title: string
    description: string
  }
  nav: {
    goal: string
    experience: string
    projects: string
    skills: string
    contact: string
  }
  hero: {
    // how the name is read, shown under it (Japanese page only)
    nameReading?: string
    title: string
    location: string
    tagline: string
    contactCta: string
  }
  goal: {
    heading: string
    paragraphs: string[]
  }
  experience: {
    heading: string
    roles: Role[]
  }
  projects: {
    heading: string
    liveLabel: string
    sourceLabel: string
    items: Project[]
  }
  skills: {
    heading: string
    items: Skill[]
  }
  certifications: {
    heading: string
    items: DatedItem[]
  }
  education: {
    heading: string
    items: DatedItem[]
  }
  contact: {
    heading: string
    body: string
    // visa / work authorisation status, shown under the body
    visa: string
    emailLabel: string
  }
}
