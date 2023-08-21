import CustomNavbar from '@/components/CustomNavbar'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import UserProvider from '@/context/userProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VintageMelodies',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white div `}>
      <UserProvider>
      <ToastContainer/>
        <CustomNavbar/>
        <div>{children}</div>
        <Footer/>
      </UserProvider>
     
        
        </body>
    </html>
  )
}
