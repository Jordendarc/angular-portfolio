import type { Metadata } from 'next'
import LanguageRedirect from '@/components/LanguageRedirect'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

// Old Angular-site URL; kept so existing links still land somewhere useful
export default function Work() {
  return <LanguageRedirect hash="experience" />
}
