import React from 'react'

const products = ({img, title, description}) => {
  return (
    <div className='border border-neutral-300 rounded-lg drop-shadow px-6 py-4'>
        <img src={img} alt="" className='mx-auto h-60'/>
        <p className="text-xl text-[#00923F] pt-4">{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default products