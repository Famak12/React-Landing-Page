import React from 'react';
import './App.css'

function Header() {
  return (
   <section>
    <div className='head-row'>
      <h3>
      <span>TRAVEL</span>PORTAL
      </h3>
      <h5>CALL US <span style={{color: "red"}}>TOLL FREE</span>  0800 123-4567</h5>
    </div>
    <div className='head-container'>
      <div>
        <h1>BOOK ONLINE</h1>
        <p>Its safe, easy, and secure.</p>
        <div>
        <input type="text" />
        <input type="submit" />
        </div>
        <div className='statment-div'>
         <h4>Your shortcut to the world's best luxury hotels</h4>
        </div>
      </div>    
    </div>
    <div className='header-end'>

    </div>
    
   </section>
  )
}

export default Header;
