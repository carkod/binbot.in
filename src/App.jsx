import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import HowWorksPage from './routes/how-it-works'
import Support from './routes/support'
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_ID);
ReactGA.send("pageview");

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowWorksPage />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
