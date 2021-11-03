import {
    Link,
    NavLink
  } from "react-router-dom";

import '../styling/Header.css'

function Header() {
    return (
        <div className="header">
            <div><Link to="/" className='logo-text'>Pintform</Link></div>
            <div className="header-nav">
                <div><NavLink exact={true} activeClassName='active-nav-link' to="/construction" className='nav-link'>Solutions</NavLink></div>
                <div><NavLink exact={true} activeClassName='active-nav-link' to="/demo" className='nav-link'>Demo</NavLink></div>
                <div><NavLink exact={true} activeClassName='active-nav-link' to="/pricing" className='nav-link'>Pricing</NavLink></div>
                <div><a href="https://webapp.pintform.com/login" className="button-filled">Log In</a></div>
                <div><a href="https://webapp.pintform.com/login" className="button">Sign Up</a></div>
            </div>
        </div>
    );
}
  
export default Header;
  