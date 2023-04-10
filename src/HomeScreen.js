import React from 'react'
import "./css/HomeScreen.css"
import Navbar from './Navbar'
import Banner from './Banner'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Row */}
        
    </div>
  )
}

export default HomeScreen