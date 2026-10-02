import type { ReactNode } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { getContent, isLocale } from '@/content'
import { links, name, nameKatakana, siteUrl } from '@/content/shared'
import styles from './page.module.sass'

function Section({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className={styles.sectionHeading}>
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  )
}

function ContactLinks({ emailLabel }: { emailLabel: string }) {
  return (
    <>
      {links.email && (
        <a className={styles.button} href={`mailto:${links.email}`}>
          {emailLabel}
        </a>
      )}
      <a className={styles.button} href={links.linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </a>
      <a className={styles.button} href={links.github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
    </>
  )
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getContent(lang)

  // Structured data so search engines can tie this page to a person
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    alternateName: nameKatakana,
    jobTitle: t.hero.title,
    url: `${siteUrl}/${lang}`,
    image: `${siteUrl}/assets/profile.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagoya',
      addressRegion: 'Aichi',
      addressCountry: 'JP',
    },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Missouri' },
    knowsLanguage: ['en', 'ja'],
    sameAs: [links.github, links.linkedin],
  }

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
      <header className={styles.hero}>
        <Image
          className={styles.avatar}
          src="/assets/profile-avatar.jpg"
          alt={name}
          width={112}
          height={112}
          priority
        />
        <div>
          <h1 className={styles.name}>{name}</h1>
          {t.hero.nameReading && <p className={styles.nameReading}>{t.hero.nameReading}</p>}
          <p className={styles.title}>
            {t.hero.title}
            <span className={styles.location}>{t.hero.location}</span>
          </p>
          <p className={styles.tagline}>{t.hero.tagline}</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.primary}`} href="#contact">
              {t.hero.contactCta}
            </a>
            <ContactLinks emailLabel={t.contact.emailLabel} />
          </div>
        </div>
      </header>

      <Section id="goal" heading={t.goal.heading}>
        <div className={styles.prose}>
          {t.goal.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" heading={t.experience.heading}>
        <ol className={styles.roles}>
          {t.experience.roles.map((role) => (
            <li key={`${role.company}-${role.title}`} className={styles.role}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemName}>
                  {role.url ? (
                    <a className={styles.companyLink} href={role.url} target="_blank" rel="noopener noreferrer">
                      {role.company} ↗
                    </a>
                  ) : (
                    role.company
                  )}
                </h3>
                <span className={styles.date}>{role.dates}</span>
              </div>
              <p className={styles.roleTitle}>{role.title}</p>
              {role.note && <p className={styles.note}>{role.note}</p>}
              <ul className={styles.highlights}>
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="projects" heading={t.projects.heading}>
        <ul className={styles.projects}>
          {t.projects.items.map((project) => (
            <li key={project.name} className={styles.project}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemName}>{project.name}</h3>
                {project.badge && <span className={styles.badge}>{project.badge}</span>}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {t.projects.liveLabel} ↗
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {t.projects.sourceLabel} ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" heading={t.skills.heading}>
        <dl className={styles.skills}>
          {t.skills.items.map((skill) => (
            <div key={skill.name}>
              <dt>{skill.name}</dt>
              <dd>{skill.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="certifications" heading={t.certifications.heading}>
        <ul className={styles.rows}>
          {t.certifications.items.map((item) => (
            <li key={item.name} className={styles.itemHeader}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.date}>{item.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" heading={t.education.heading}>
        <ul className={styles.rows}>
          {t.education.items.map((item) => (
            <li key={item.name}>
              <div className={styles.itemHeader}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.date}>{item.date}</span>
              </div>
              {item.detail && <p className={styles.roleTitle}>{item.detail}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" heading={t.contact.heading}>
        <p className={styles.contactBody}>{t.contact.body}</p>
        <p className={styles.contactNote}>{t.contact.visa}</p>
        <div className={styles.actions}>
          <ContactLinks emailLabel={t.contact.emailLabel} />
        </div>
      </Section>

      <footer className={styles.footer}>© {new Date().getFullYear()} {name}</footer>
    </main>
  )
}
