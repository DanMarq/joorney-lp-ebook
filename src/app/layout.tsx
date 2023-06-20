import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Joorney | Você morando legalmente nos Estados Unidos',
  description: 'Descubra o caminho para morar nos Estados Unidos legalmente!',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: 'favicon/favicon-32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: 'favicon/favicon-16x16',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: 'favicon/apple-touch-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
