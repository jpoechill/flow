// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Link from 'next/link'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khmer Learn',
  description: 'Master Khmer with interactive lessons and cultural insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 min-h-screen`}>
        {/* Navigation */}
        <Header />

        {/* Main Content */}
        <main className="pt-20 pb-10 min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body >
    </html >
  )
}
