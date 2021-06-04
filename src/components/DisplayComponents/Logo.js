import React from "react";
import './logo.css'

// import logo from "../../Img/Lambda_Logo_white.png";
const logo=<h1>Calculator</h1>


const Logo = (props) => {
  return (
    <div className="logo-container">
      <h1 className="logo"  onClick={() => {props.setTheme(props.theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}}>{logo }</h1>
      
    </div>
  );
};

export default Logo;