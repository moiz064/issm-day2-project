import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

const App = () => {
  const person = {
    img: 'wedding',
    rating: 4.8,
    reviewCount: 6,
    country: 'USA',
    title: 'Life lessons with katie zaferes',
    price: 136
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img= 'wedding.png'
      rating= {4.8}
      reviewCount= {6}
      country= 'USA'
      title= 'Life lessons with katie zaferes'
      price= {136} />
    </div>
  )
}

export default App
