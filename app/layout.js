import './globals.css'
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google';
import Image from 'next/image';


// const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald ({
  subsets: ['latin'],
  weight:['200','700']
});

export const metadata = {
  title: 'Arnav Panchal',
  description: 'Developed by Arnav Panchal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oswald.className}>
        {children}</body>
    </html>
  )
}
