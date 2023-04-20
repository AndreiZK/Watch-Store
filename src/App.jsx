import { useState } from 'react'

import './App.scss'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Catalogue from '../components/Catalogue'
import Howto from '../components/Howto'
import Reviews from '../components/Reviews'
import Form from '../components/Form'
import Footer from '../components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Catalogue />
      <Howto />
      <Reviews />
      <Form />
      <Footer />
    </div>
  )
    
}

export default App
