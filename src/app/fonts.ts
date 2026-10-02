import { Inter, Noto_Sans_JP } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Japanese fonts are large, so let the browser fetch only the glyph ranges a page uses
export const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  preload: false,
})

export const fontVariables = `${inter.variable} ${notoSansJp.variable}`
