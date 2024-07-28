import './globals.css'
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react"

// const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '700']
});

export const metadata = {
  title: 'Arnav Panchal',
  description: 'Developed by Arnav Panchal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7H913EQK7P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7H913EQK7P');
            `,
          }}
        />
      </head>
      <body className={oswald.className}>
        <Analytics/>
        {children}
      </body>
    </html>
  )
}
