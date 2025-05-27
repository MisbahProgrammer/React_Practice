import { useState } from 'react'
import './App.css'
import FormHandling from './Component/FormHandling'
import TwoWayBinding from './Component/TwoWayBinding'
import Card from './Component/Card'
import Profile1 from './assets/profile1.jfif'
import Profile2 from './assets/profile2.jfif'
import Gigs from './Component/Gigs'

function App() {
 const Gig = [
  {
    "pic": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "John Doe",
    "profession": "Frontend Developer",
    "location": "New York, USA"
  },
  {
    "pic": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Jane Smith",
    "profession": "Graphic Designer",
    "location": "Toronto, Canada"
  },
  {
    "pic": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Ali Khan",
    "profession": "Mobile App Developer",
    "location": "Lahore, Pakistan"
  },
  {
    "pic": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Sara Lee",
    "profession": "UI/UX Designer",
    "location": "Berlin, Germany"
  },
  {
    "pic": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "Carlos Martinez",
    "profession": "Backend Engineer",
    "location": "Madrid, Spain"
  }
]


  return (
    <>
      <FormHandling/>
      <TwoWayBinding/>
      <div className='flex'>
      <Card image = {Profile1} user = 'Denver' location = 'France'/>
      <Card image = {Profile2} user = 'Marco' location = 'Italy'/>
      </div>
      <div className='flex gap-2 items-center justify-center p-5'>
      {Gig.map(function(elem, idx){
        return <Gigs key={idx} user ={elem.name} Photo ={elem.pic} prof={elem.profession} location = {elem.location}/>
      })}
      </div>
      
      
    </>
  )
}

export default App
