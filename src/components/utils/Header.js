import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">page one</Link>
      </div>
      <div>
        <Link to="/page-two">page two</Link>
      </div>
    </div>
  );
};

export default Header;
