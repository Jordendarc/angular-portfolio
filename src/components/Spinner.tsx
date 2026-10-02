import styles from './Spinner.module.sass'

export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading">
      <svg className={styles.spinner} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" />
      </svg>
    </div>
  )
}
