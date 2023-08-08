import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const App = () => {

  const card =
    <ul className='flex flex-row '>
      {

        data.map((item) => (
          <li>
            < Card
              img={item.img}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              country={item.country}
              title={item.title}
              price={item.price} />
          </li>
        )
        )

      }

    </ul>


  return (
    <div>
      <Navbar />
      <Hero />
      <section className='flex flex-row overflow-x-auto'>
        {card}
      </section>


    </div>
  )
}

export default App
