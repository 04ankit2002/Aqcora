import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Conatct from './components/Conatct'
import Footer from './components/Footer'

function App() {
  return (
<div className='w-screen'>
  <div className='max-w-7xl m-auto flex flex-col gap-10'>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Conatct />
    <Footer />
  </div>

</div>
  )
}

export default App