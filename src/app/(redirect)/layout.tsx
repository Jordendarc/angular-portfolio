import type { Metadata } from 'next'
import '../globals.sass'
import { fontVariables } from '../fonts'
import { name, siteUrl } from '@/content/shared'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: name,
}

export default function RedirectLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
