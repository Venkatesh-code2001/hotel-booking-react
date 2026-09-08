import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className="logoWrapper">
            <div className="logoBadge">✨</div>
            <span className="logoText">Grand<span className="logoHighlight">Stay</span></span>
          </div>
        </Link>
        <div className="navItems">
          <button className="navButton navButtonSecondary" onClick={() => navigate('/login')}>Register</button>
          <button className="navButton navButtonPrimary" onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
