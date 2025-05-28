import axios from 'axios'
import React, {useState} from 'react'

function Axios() {
    const [Data, setData] = useState([])
    const getData = async() =>{
     const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
     setData(response.data)
     
     
    }
  return (
    <>
     <button className='py-2 px-5 bg-teal-600 font-sans text-white rounded mt-5 cursor-pointer' onClick={getData}>Get Data</button>
     <div className='flex gap-2'>
        {Data.map(function(elem, idx){
            return <div key={idx} className='bg-gray-50 flex flex-col rounded-2xl gap-2 items-center w-52 p-5 '>
                <img src={elem.download_url} alt="" />
                <h2>{elem.author}</h2>
            </div>
        })}
     </div>
     </>
  )
}

export default Axios