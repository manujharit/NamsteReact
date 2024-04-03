import { IMG_URL } from "../utils/constants";

import { useState, useEffect } from "react";


const Header = () => {
  let [buttonName, setButtonName] = useState('Login')

  const handleClick = () => {
    buttonName === 'Login'?setButtonName('Logout'):setButtonName('Login')
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="header-btn" onClick={() => { handleClick()}}>{buttonName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;