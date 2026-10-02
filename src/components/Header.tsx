import Image from 'next/image'
import styles from './Header.module.sass'

export default function Header() {
  return (
    <header className="mb-3">
      <div className={styles.banner} />
      <div className={styles.avatar}>
        <Image src="/assets/profile.jpeg" alt="profile image" width={160} height={160} priority />
      </div>
      <div className={styles.titleBar}>
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="pt-2">
              <h1 className={styles.name}>Jorden Carter-Whitbey</h1>
              <h4 className={styles.role}>Software Engineer</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
