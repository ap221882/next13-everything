import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/todos', label: 'Todos' },
]

const MarketingLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default MarketingLayout
