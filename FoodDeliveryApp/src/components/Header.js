import { IMG_URL } from "../utils/constants";

import { useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  let [buttonName, setButtonName] = useState('Login')

  const handleClick = () => {
    buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
  }
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="header-btn" onClick={() => { handleClick() }}>{buttonName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;