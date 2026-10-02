import Link from 'next/link'
import { getContent, localeNames, locales, type Locale } from '@/content'
import { name } from '@/content/shared'
import styles from './SiteNav.module.sass'

export default function SiteNav({ locale }: { locale: Locale }) {
  const { nav } = getContent(locale)
  const sections = [
    { id: 'goal', label: nav.goal },
    { id: 'experience', label: nav.experience },
    { id: 'projects', label: nav.projects },
    { id: 'skills', label: nav.skills },
    { id: 'contact', label: nav.contact },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#">
          {name}
        </a>
        <ul className={styles.sections}>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.locales} aria-label="Language">
          {locales.map((code) => (
            <li key={code}>
              <Link href={`/${code}`} lang={code} hrefLang={code} aria-current={code === locale ? 'true' : undefined}>
                {localeNames[code]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
