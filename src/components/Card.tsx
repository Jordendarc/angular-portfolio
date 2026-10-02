import type { ReactNode } from 'react'
import styles from './Card.module.sass'

type Props = {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}

export default function Card({ title, subtitle, children }: Props) {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.content}>{children}</div>
    </section>
  )
}
