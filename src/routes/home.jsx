import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Invest in crypto without buying coins or tokens"
        content="We know crypto is hard, risky and full of contradictions. Let us take care of it."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
