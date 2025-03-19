import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './Layout.css'


const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <div className="img">
         <h1>EDGECUT</h1>
        </div>
        <div>
          <ul className="nav-list">
            <li className="li1"><Link to="/">Home</Link></li>
            <li className="li1"><Link to="/products">Furnitures</Link></li>
            <li className="li1"><Link to="/Contact">Blog</Link></li>
            <li className="li1"><Link to="/About">About</Link></li>
            <li className="li1"><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="icons">
        <li className="li1"><Link to="/Login">Login</Link></li>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;