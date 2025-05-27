import React from 'react'

function Card({image, user, location}) {
    console.log(image)
  return (
    <>
    <div className='p-5'>
    <div className='flex flex-col items-center justify-center gap-1 p-5  w-72 rounded bg-gray-100'>
        <img src={image} alt="" className='w-70 rounded-2xl' />
        <h2 className='text-2xl font-semibold font-sans'>{user}</h2>
        <h3 className='text-xl'>{location}</h3>
        <button className='py-3 px-5 bg-cyan-600 rounded font-bold cursor-pointer'>Add Friend</button>
    </div>
    </div>
    </>
  )
}

export default Card