import React from 'react'
import { wedding, star } from '../assets'

const Card = ({ img, rating, reviewCount, country, title, price }) => (

    <div className='flex justify-between flex-col max-w-[175px] rounded-[20px] mx-10 mb-10 bg-slate-200 text-sm font'>
        
        <img src={wedding} alt={img}
            className='w-[100%] rounded-[20px]'
        />

        <div>
            <div className='flex flex-row align-middle space-x-1 items-center'>

                <img src={star} alt="star" className='h-[13px]' />
                <span>{rating}</span>
                <span className='text-gray-400'>({reviewCount})</span>
                <span className='text-gray-400'>-{country}</span>

            </div>
            <p>{title}</p>
            <p><span className='font-semibold'>From ${price} </span> / person</p>
        </div>
    </div>
)


export default Card