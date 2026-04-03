import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/StaticData/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => 
{
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Set the data in context
  const { loggedInUser } = useContext(UserContext);

  //Subscribing the store using useSelector Hook
  const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="flex justify-between border border-amber-200 bg-linear-to-r from-transparent via-amber-50 to-amber-300">
      <div className="logo-container">
        <img
          className="w-25 h-20 ml-5"
          src={LOGO_URL}
        ></img>
      </div>

      {/* 
        Link component VS <a> tag:
         - <Link> is used in React Router for client-side navigation without page reload (Relaods only required component)
         - while <a> causes a full page reload and requests the server. (Reload whole page)
      */}
      <div className="flex items-center">
        <ul className="flex p-2 items-center">
          <li className="mr-10">Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mr-10"><Link to="/">Home</Link></li>
          <li className="mr-10"><Link to="/about">About Us </Link></li>

          <li className="mr-10"><a href="/contact">Contact Us</a></li> {/**Not Use Achor Tag Use Link Component */}
          <li className="mr-10"><Link to="/grocery">Grocery</Link></li>
          
          <li className="mr-10 text-black"><Link to="/cart">🛒Cart({cartItems.length} items)</Link></li>
          
          <li className="mr-10">
            <button className="loginBtn" onClick=
              {
                ()=> { setBtnName(btnName == "Login" ? "Logout" : "Login") }
              }>{btnName}
            </button>
          </li>

          <li className="font-bold mr-10">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;