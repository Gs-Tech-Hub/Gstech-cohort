import './globals.css'
import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import ThemeProvider from './ThemeProvider'

export const metadata = {
  title: 'GSTECH HUB',
  description: 'Accelerator, Incubator & Tech Skills Hub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
