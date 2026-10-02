import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './NavButtons.module.sass'

export default function NavButtons() {
  return (
    <nav className={`${styles.buttonList} mb-3`}>
      <Link href="/aboutMe" className={`${styles.button} ${styles.linkButton}`}>
        About Me
      </Link>
      <Link href="/work" className={`${styles.button} ${styles.linkButton}`}>
        Work
      </Link>
      <a
        href="https://github.com/Jordendarc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={styles.button}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/jorden-carter-whitbey/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={styles.button}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </nav>
  )
}
