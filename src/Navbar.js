import React, { useState, useEffect } from 'react'
import './css/Navbar.css'

function Navbar() {
  const [show, handleshow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100){
      handleshow(true);
    } else {
      handleshow(false)
    }
  }


  useEffect(()=>{
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
            <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
        </div>
    </div>
  )
}

export default Navbar