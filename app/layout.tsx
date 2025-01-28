import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import InteractiveBackground from "./components/InteractiveBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ben Weiler - Personal Website",
  description: "Showcase of personal, professional, and school projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white min-h-screen flex flex-col`}>
        <InteractiveBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>
          <footer className="bg-gray-800 bg-opacity-80 py-4 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Ben Weiler. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

