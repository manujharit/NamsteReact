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
    <div className="flex justify-between bg-pink-100 shadow-lg px-2">
      <div className="logo-container">
        <img className="w-24" src={IMG_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-1">Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-1"><Link to="/">Home</Link></li>
          <li className="px-1"><Link to="/grocery">Grocery</Link></li>
          <li className="px-1"><Link to="/about">About</Link></li>
          <li className="px-1"><Link to="/contact">Contact Us</Link></li>
          <li className="px-1">Cart</li>
          <li className="px-1"><button className="header-btn" onClick={() => { handleClick() }}>{buttonName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;