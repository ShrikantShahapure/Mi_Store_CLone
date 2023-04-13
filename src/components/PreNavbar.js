import React from 'react'
import '../styles/PreNavbar.css';


const PreNavbar = () => {
  return (
    <div className='preNav'>
      <div>
      <a href='https://www.mi.com/in'>MI INDIA</a><span>|</span>
      <a href='https://www.mi.com/in/store'>Get mi store app</a> <span>|</span>
      <a href='https://www.mi.com/in/store'>Help Center</a> <span>|</span>
      <a href='https://www.mi.com/in/store'>Retail Store</a> <span>|</span>
      </div>
      <div>
      <a href='https://www.mi.com/in/store'>Sign-up</a> <span>|</span>
      <a href='https://www.mi.com/in/store'>Sign-in</a> <span>|</span>
      <a href='https://www.mi.com/in/store'> <i className="fa-solid fa-cart-shopping"></i> Cart(0)</a> <span>|</span>
      </div>
    </div>
  )
}
 
export default PreNavbar