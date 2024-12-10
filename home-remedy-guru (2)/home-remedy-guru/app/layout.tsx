import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Remedy Guru',
  description: 'Your ultimate guide to natural healing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SearchBar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

