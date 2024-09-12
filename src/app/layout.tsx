import './globals.css'

import type { Metadata } from 'next'

import Header from '@/components/Header/Header'

import QueryProvider from './providers/QueryProvider'
import StoreProvider from './providers/StoreProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <QueryProvider>
            <Header />
            {children}
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
