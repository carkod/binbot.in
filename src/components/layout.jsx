import React from 'react'

import { BackgroundGradient } from './background-gradient'
import { Header } from './header'
import { Footer } from './footer'

export function Layout({ children }) {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {/* <BackgroundGradient className="absolute top-0 bottom-0 left-1/2 w-1/2 lg:block" /> */}

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
