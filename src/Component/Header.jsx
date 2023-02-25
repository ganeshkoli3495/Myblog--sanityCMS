import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <header className="max-width">
        <h1>MyBlog</h1>
        <nav>
          <ul>
            <li>
            <Link to="/">
              Home
              </Link>  
            </li>
            <li>
            <Link to="/BlogPage">
              Blog
              </Link>
            </li>
              
              <li>
              <Link to="#">
              Contact
              </Link></li>
            
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
