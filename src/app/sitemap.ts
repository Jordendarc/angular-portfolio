import type { MetadataRoute } from 'next'
import { locales } from '@/content'
import { siteUrl } from '@/content/shared'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}`]))

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }))
}
