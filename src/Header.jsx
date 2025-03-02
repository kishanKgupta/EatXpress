import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const toggleLogin = () => {
    setBtnName((prevBtnName) => (prevBtnName === "Login" ? "Logout" : "Login"));
  };

  return (
    <header className="flex justify-around items-center bg-orange-500 h-14 ">
      <div className="">
        <p>Logo</p>
      </div>
      <nav>
        <ul className="flex justify-around items-center gap-4">
          <li>Online Status : {onlineStatus == true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>Cart</li>
          <li>
            <button className="login" onClick={toggleLogin}>
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
