'use client'

import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { formatMonthYear, type DateValue } from '@/lib/formatMonthYear'
import Card from './Card'
import Spinner from './Spinner'
import WorkDescription from './WorkDescription'
import styles from './WorkList.module.sass'

type WorkItem = {
  id: string
  workplace: string
  position: string
  from: DateValue
  to?: DateValue
}

function determineTo(date?: DateValue) {
  if (!date) return ''
  return date === 'present' ? 'present' : formatMonthYear(date)
}

export default function WorkList() {
  const [work, setWork] = useState<WorkItem[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const workQuery = query(collection(db, 'work'), orderBy('from', 'desc'))
    return onSnapshot(
      workQuery,
      (snapshot) => setWork(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as WorkItem)),
      () => setFailed(true),
    )
  }, [])

  if (failed) return <p className={styles.error}>Could not load work history.</p>
  if (!work) return <Spinner />

  return work.map((workItem) => (
    <Card
      key={workItem.id}
      title={
        <>
          <span className={styles.workplace}>{workItem.workplace}</span>
          <span className={styles.dates}>
            {formatMonthYear(workItem.from)} to {determineTo(workItem.to)}
          </span>
        </>
      }
      subtitle={workItem.position}
    >
      <WorkDescription id={workItem.id} />
    </Card>
  ))
}
