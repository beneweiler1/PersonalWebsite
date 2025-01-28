"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Personal Projects", path: "/personal" },
  { name: "Professional Projects", path: "/professional" },
  { name: "School Projects", path: "/school" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-gray-800 bg-opacity-80 py-4 sticky top-0 z-10">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-lg hover:text-gray-300 transition-colors ${
                  pathname === item.path ? "text-white font-bold border-b-2 border-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

