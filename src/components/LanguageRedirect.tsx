'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { localeNames, locales } from '@/content'

// Sends visitors to the Japanese site if their browser prefers Japanese, otherwise English.
// `hash` lands them on a section, e.g. "experience". The links are the fallback for when
// JavaScript is off.
export default function LanguageRedirect({ hash }: { hash?: string }) {
  const router = useRouter()
  const suffix = hash ? `#${hash}` : ''

  useEffect(() => {
    const prefersJapanese = navigator.languages.some((language) => language.toLowerCase().startsWith('ja'))
    router.replace(`/${prefersJapanese ? 'ja' : 'en'}${suffix}`)
  }, [router, suffix])

  return (
    <p style={{ display: 'flex', gap: 16, justifyContent: 'center', padding: 48 }}>
      {locales.map((code) => (
        <Link key={code} href={`/${code}${suffix}`} lang={code}>
          {localeNames[code]}
        </Link>
      ))}
    </p>
  )
}
