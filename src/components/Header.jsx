import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => 
{
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>

      {/* 
        Link component VS <a> tag:
         - <Link> is used in React Router for client-side navigation without page reload (Relaods only required component)
         - while <a> causes a full page reload and requests the server. (Reload whole page)
      */}
      <div className="nav-items">
        <ul>
          <li>Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us </Link></li>

          <li><a href="/contact">Contact Us</a></li> {/**Not Use Achor Tag Use Link Component */}
          
          <li><Link to="/hello">Cart</Link></li>
          <li><button className="loginBtn" onClick=
            {
              ()=> { setBtnName(btnName == "Login" ? "Logout" : "Login") }
            }>{btnName}
          </button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;