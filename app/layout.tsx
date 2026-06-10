import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  variable: '--font-lato', 
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'E-Hasiru | IT Asset Disposal & E-Waste Recycling Company India',
  description: 'E-Hasiru is India\'s leading e-waste recycling and IT asset disposal company. CPCB authorized facility offering data destruction, refurbishment, and compliance services.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
