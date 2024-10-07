import React from 'react';
import './App.css'

function Header() {
  return (
   <section>
    <div className='head-row'>
      <h3>
      <span>TRAVEL</span>PORTAL
      </h3>
      <h3>CALL US TOLL FREE 0800 123-4567</h3>
    </div>
    <div className='head-container'>
      <div>
        <h1>BOOK ONLINE</h1>
        <p>Its safe, easy, and secure.</p>
        <div>
        <input type="text" />
        <input type="submit" />
        </div>
        

      </div>

    </div>
    
   </section>
  )
}

export default Header;
