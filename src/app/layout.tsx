import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import {Suspense} from "react";
import {Header} from "@/components/Header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Лучший на свете пет проект',
  description: 'Generated by create next app',
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
      <Suspense>
          {children}
      </Suspense>

      </body>
    </html>
  )
}
