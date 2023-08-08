import React from 'react'
import { airbnb } from '../assets'

const Navbar = () => (
    <nav className='h-70px flex py-5 px-10 shadow-md'>
        <img src={airbnb} alt="airbnb" 
            className='max-w-100'
        />
    </nav>
)

export default Navbar