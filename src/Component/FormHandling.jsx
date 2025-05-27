import React from 'react'

function FormHandling() {
    const onSubmittion = (e) =>{
    console.log('Submitted');
    e.preventDefault()
    
  }
  return (
    <> 
    <form className='flex justify-center py-10 border-b-2 flex-col' onSubmit={(e) => {onSubmittion(e)}}>
        <h2 className='text-center font-bold'>Form Handling</h2>
        <input type="text" className='py-3 px-5 border rounded m-auto w-xl my-1' placeholder='Enter Your Name'/>
        <button className='py-3 px-5 bg-cyan-600 rounded w-30 m-auto cursor-pointer'>Submit</button>
      </form>
    </>
  )
}

export default FormHandling