import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Conatct from './components/Conatct'
import Footer from './components/Footer'

function App() {
  return (
<div className='bg-gradient-to-b from-blue-50 to-blue-100 '>
  <div className=' flex  flex-col'>
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