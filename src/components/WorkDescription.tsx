'use client'

import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Spinner from './Spinner'

type Description = {
  id: string
  text: string
  rank: number
}

export default function WorkDescription({ id }: { id: string }) {
  const [descriptions, setDescriptions] = useState<Description[] | null>(null)

  useEffect(() => {
    return onSnapshot(collection(db, `work/${id}/descriptions`), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Description)
      setDescriptions(items.sort((a, b) => (a.rank > b.rank ? 1 : -1)))
    })
  }, [id])

  if (!descriptions) return <Spinner />

  return (
    <ul>
      {descriptions.map((description) => (
        <li key={description.id}>{description.text}</li>
      ))}
    </ul>
  )
}
