import Card from '@/components/Card'
import WorkList from '@/components/WorkList'
import styles from './page.module.sass'

const keywords = [
  'Java', 'Angular', 'Javascript', 'PCF',
  'Firebase', 'Typescript', 'CI/CD', 'Kotlin',
  'Firestore', 'AWS', 'PWA', 'Spring Boot',
  'Rest API', 'DB2', 'SQL', 'NoSQL',
  'Git',
]

export default function Work() {
  return (
    <>
      <Card title="Keywords:">
        <ul className={styles.chipList} aria-label="keywords">
          {keywords.map((keyword) => (
            <li key={keyword} className={styles.chip}>
              {keyword}
            </li>
          ))}
        </ul>
      </Card>
      <WorkList />
    </>
  )
}
