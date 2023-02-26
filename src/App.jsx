import React from 'react'
import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Plan from './components/Plan'
import Rooms from './components/Rooms'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Offers/>
    <Plan/>
    <Rooms/>
    <ImageSlider/>
    </>
  )
}

export default App
