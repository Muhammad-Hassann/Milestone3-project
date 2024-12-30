import { Inter } from 'next/font/google'
import { ProductProvider } from '@/context/ProductContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glow Beauty - Cosmetics E-commerce',
  description: 'Discover the best in beauty and skincare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProductProvider>
      </body>
    </html>
  )
}

