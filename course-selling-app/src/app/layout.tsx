import CustomNavbar from '@/components/CustomNavbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'COURSE-SELLING-APP',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cyan-500`}>
        <CustomNavbar/>
        <div>{children}</div>
        <Footer/>
        
        </body>
    </html>
  )
}
