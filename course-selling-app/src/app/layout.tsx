import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <div><h1 className=' bg-yellow-200'>This is header</h1></div>
        <div>{children}</div>
        <div><h1 className=' bg-red-200'>this is the footer</h1></div>
        
        </body>
    </html>
  )
}
