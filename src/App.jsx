import { useState } from 'react'
import './App.css'
import FormHandling from './Component/FormHandling'
import TwoWayBinding from './Component/TwoWayBinding'
import Card from './Component/Card'
import Profile1 from './assets/profile1.jfif'
import Profile2 from './assets/profile2.jfif'

function App() {
  

  return (
    <>
      <FormHandling/>
      <TwoWayBinding/>
      <div className='flex'>
      <Card image = {Profile1} user = 'Denver' location = 'France'/>
      <Card image = {Profile2} user = 'Marco' location = 'Italy'/>
      </div>
    </>
  )
}

export default App
