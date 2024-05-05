import { IMG_URL } from "../utils/constants";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

import { useSelector } from "react-redux";


const Header = () => {
  let [buttonName, setButtonName] = useState('Login')

  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)
  const handleClick = () => {
    buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
  }
  const data = useContext(UserContext)
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between shadow-lg px-2">
      <div className="flex justify-center m-2">
        <img className="w-24 rounded-2xl" src={IMG_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:font-semibold"><Link to="/">Home</Link></li>
          <li className="px-4 hover:font-semibold"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 hover:font-semibold"><Link to="/about">About</Link></li>
          <li className="px-4 hover:font-semibold"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold "><Link to="/cart">Cart[{cartItems.length}]</Link></li>
        <li className="px-4 border border-solid shadow-lg rounded-lg w-20 text-center "><button className="header-btn" onClick={() => { handleClick() }}>{buttonName}</button></li>
        <li ><input type="text" className="border mx-2 w-40 px-4 text-center border-black rounded-md" value={data.loggedInUser} onChange={(e) => { data.setUsername(e.target.value) }} /></li>
      </ul>
    </div>
    </div >
  )
}

export default Header;