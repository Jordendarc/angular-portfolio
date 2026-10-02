'use client'

import { useState, type ReactNode } from 'react'
import styles from './Tabs.module.sass'

type Tab = {
  label: string
  content: ReactNode
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className={styles.group}>
      <div className={styles.labels} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === active}
            aria-controls={`tabpanel-${i}`}
            className={`${styles.label} ${i === active ? styles.active : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.body} role="tabpanel" id={`tabpanel-${active}`} aria-labelledby={`tab-${active}`}>
        {tabs[active].content}
      </div>
    </div>
  )
}
