import React from 'react';
import './navbar.css';

const Navbar = props => (
  <div>
      <input type="search" placeholder="Search" onChange={props.handleChange} />
      <button type="submit" onClick={props.handleClick}>Search</button>
  </div>
)

export default Navbar;