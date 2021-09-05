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
                <div><Link to="/construction" className="button-filled">Log In</Link></div>
                <div><Link to="/construction" className="button">Sign Up</Link></div>
            </div>
        </div>
    );
}
  
export default Header;
  