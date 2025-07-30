
import { useState } from "react";
import {LOGO_URL } from "../utils/contsants";


 export const Header = () => {

  const[btnName,setbtnName]=useState("Login");                            
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}                             
        />
      </div>
      <div className="nav-items">
      <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>  
          <li>Cart</li>      
          <button className="Login" onClick={()=>{
            btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
        </ul>
      </div>  
    </div>
  );
};


