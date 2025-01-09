import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { Nav } from '@/components/nav'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in modern web technologies and scalable solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'John Doe - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in modern web technologies and scalable solutions.',
    siteName: 'John Doe Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        manrope.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <div className="pt-14">
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}