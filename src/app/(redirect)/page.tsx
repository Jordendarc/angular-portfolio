import type { Metadata } from 'next'
import LanguageRedirect from '@/components/LanguageRedirect'
import { getContent, locales } from '@/content'

export const metadata: Metadata = {
  description: getContent('en').meta.description,
  alternates: {
    canonical: '/',
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
      'x-default': '/',
    },
  },
}

export default function Home() {
  return <LanguageRedirect />
}
