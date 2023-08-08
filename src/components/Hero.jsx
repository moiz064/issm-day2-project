import React from 'react'
import { grid } from '../../public/assets'

const Hero = () => {
    return (
        <section className='p-[25px] flex flex-col'>
            <img src={grid} alt="grid"
                className='self-center mt-10 w-[400px]'
            />
            <div className='ml-10'>
                <h1 className='font-bold text-3xl mt-7 font-poppins'>
                    Online Experiences
                </h1>
                <p className='font-poppins'>
                    Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}

export default Hero