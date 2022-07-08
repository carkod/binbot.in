import React from 'react'

import { BackgroundGradient } from './background-gradient'
import { Header } from './header'
import { Footer } from './footer'

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-hidden">
      <BackgroundGradient className="absolute top-0 bottom-0 left-1/2 w-1/2 lg:block" />

      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">
        {children}
      </main>
      <Footer />
    </div>
  )
}
