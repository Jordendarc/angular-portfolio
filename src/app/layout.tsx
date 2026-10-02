import type { Metadata } from 'next'
import { Alfa_Slab_One, Hind_Madurai, Roboto } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.sass'
import Analytics from '@/components/Analytics'
import Header from '@/components/Header'
import NavButtons from '@/components/NavButtons'

// The stylesheet is imported above, so stop Font Awesome injecting it again at runtime
config.autoAddCss = false

const alfaSlabOne = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alfa-slab-one',
})

const hindMadurai = Hind_Madurai({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hind-madurai',
})

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const description = "Jorden Carter-Whitbey's portfolio website"
const previewImage = 'https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838917_960_720.jpg'

export const metadata: Metadata = {
  metadataBase: new URL('https://jorden-cw.com/'),
  title: 'Jorden Carter-Whitbey',
  description,
  openGraph: {
    title: 'Jorden Carter-Whitbey',
    url: 'https://jorden-cw.com/',
    images: [previewImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jorden Carter-Whitbey',
    description,
    images: [previewImage],
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${alfaSlabOne.variable} ${hindMadurai.variable} ${roboto.variable}`}
      // Bootstrap sets scroll-behavior: smooth; this tells Next not to animate scroll on route changes
      data-scroll-behavior="smooth"
    >
      <body>
        <Analytics />
        <Header />
        <div className="container">
          <NavButtons />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
