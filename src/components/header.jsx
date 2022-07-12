import React from 'react'
import { Link } from 'react-router-dom'

export function Header({ title = '' }) {
  return (
    <header className="relative py-6">
      <div className="w-full">
          <h1 className="text-xl font-bold leading-none">
            <Link to="/" className="flex items-center no-underline">
              <span className='text-brand uppercase'>Binbot</span>.<span className='text-success uppercase'>in</span>{" "}vestments
            </Link>
          </h1>
      </div>
    </header>
  )
}
