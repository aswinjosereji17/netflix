import { useState } from 'react';
import "./NavBar.css";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
      
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Language
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Hindi</a>
          </div>
        )}
      </div>

      <button className="avatar">Sign In</button>
    </div>
  );
}

export default NavBar;
