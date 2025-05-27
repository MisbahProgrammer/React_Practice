import React, { useState } from 'react'

function TwoWayBinding() {
    const [username, setusername] = useState('')
    const FormSubmit = (e) =>{
        e.preventDefault();
        console.log(username);
        setusername('')
        
    }
  return (
    <> 
    <form className='flex justify-center py-10 border-b-2 flex-col'
    onSubmit={(e) =>{
        FormSubmit(e)
    }}
    >
        <h2 className='text-center font-bold'>Two Ways Binding</h2>
        <input 
        value={username}
        onChange={(e) =>{
            setusername(e.target.value)
            
        }}
        type="text" 
        className='py-3 px-5 border rounded m-auto w-xl my-1' 
        placeholder='Enter Your Name'
        />
        <button className='py-3 px-5 bg-cyan-600 rounded w-30 m-auto cursor-pointer'>Submit</button>
      </form>
    </>
  )
}

export default TwoWayBinding