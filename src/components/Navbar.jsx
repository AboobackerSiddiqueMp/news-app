import React from 'react'
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div id='navbar' className=''>
        <ul id='navlist'>
          <li id='navTitle'>NEWS MONKEY</li>
          <div id='category'>
            <li id='naveli' onClick={() => { navigate('/') }} >Home</li>

            <li id='naveli' onClick={() => { navigate('/business') }} >business</li>
            <li id='naveli' onClick={() => { navigate('/entertainment') }}>entertainment</li>
            <li id='naveli' onClick={() => { navigate('/science') }}>science</li>
            <li id='naveli' onClick={() => { navigate('/health') }}>health</li>

            <li id='naveli' onClick={() => { navigate('/sports') }}>sports</li>
            <li id='naveli' onClick={() => { navigate('/technology') }}>technology</li>

          </div>
        </ul>

      </div>
    </div>
  )
}

export default Navbar