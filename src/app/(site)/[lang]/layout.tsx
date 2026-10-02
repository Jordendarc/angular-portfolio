import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../../globals.sass'
import { fontVariables } from '../../fonts'
import Analytics from '@/components/Analytics'
import SiteNav from '@/components/SiteNav'
import { getContent, isLocale, locales } from '@/content'
import { name, siteUrl } from '@/content/shared'

// The stylesheet is imported above, so stop Font Awesome injecting it again at runtime
config.autoAddCss = false

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = getContent(lang)

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
        // "/" picks a language from the visitor's browser
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'profile',
      siteName: name,
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      images: [{ url: '/assets/profile.jpeg', width: 1600, height: 1600, alt: name }],
    },
    twitter: {
      card: 'summary',
      title: meta.title,
      description: meta.description,
      images: ['/assets/profile.jpeg'],
    },
  }
}

export default async function SiteLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <html lang={lang} className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <Analytics />
        <SiteNav locale={lang} />
        {children}
      </body>
    </html>
  )
}
