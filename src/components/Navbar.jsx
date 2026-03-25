import React from 'react'
import'./Home.css'
import'./Navbar.css'
import logo from './images/logo.png'
import caret from './images/caret.png'
import search from './images/search.png'
export default function Navbar() {
  return (
    <div className='mainnav'>
        <div className="left-nav">
            <img src={logo} width={200} alt='lgo'/>
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>Browse By Languages</li>
            </ul>
        </div>
        <div className="right-nav">
            <img src={search} width={28} className='icons' alt='icn'/>
            <p>Children</p>
            <img src={caret} width={28} className='icons' alt='crt'/>
        </div>
      
     
    </div>
  )
}
