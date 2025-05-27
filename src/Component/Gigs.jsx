import React from 'react'

function Gigs(elem) {
    
    
  return (
    <>
    
    <div className='flex flex-col items-center justify-center gap-1 bg-gray-100 w-70 rounded-2xl'>
        <img src={elem.Photo} alt="" />
        <h2>{elem.user}</h2>
        <h3>{elem.prof}</h3>
        <h3>{elem.location}</h3>
        <button className='py-2 px-5 bg-green-600 text-white font-bold rounded-2xl cursor-pointer'>See Portfolio</button>
    </div>
    
    
    </>
  )
}

export default Gigs