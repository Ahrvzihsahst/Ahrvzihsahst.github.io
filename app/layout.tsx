import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biswajit Jena - AI Associate Software Engineer',
  description: 'Innovative AI Associate Software Engineer with expertise in developing intelligent chatbot solutions using LLMs and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-white font-mono antialiased">
        {children}
      </body>
    </html>
  )
} 