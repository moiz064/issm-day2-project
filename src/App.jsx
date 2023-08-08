import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const App = () => {

  const card = 
  
  data.map((item) => (
      < Card
      img = { item.img }
      rating = { item.stats.rating }
      reviewCount = { item.stats.reviewCount }
      country = { item.country }
      title = { item.title }
      price = { item.price } />
      )
  )

return (
  <div>
    <Navbar />
    <Hero />
    <section className='flex flex-row overflow-scroll'>
      {card}
    </section>
    

  </div>
)
}

export default App
