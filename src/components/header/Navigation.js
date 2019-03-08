// Navigation Bar to navigate to different pages:
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { setNavigation } from '../../actions';

import {selectNav} from '../../util';


class Navigation extends React.PureComponent {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><NavLink exact activeClassName='high-lighted' to="/" onClick={selectNav}>Home</NavLink></li>
          <li><NavLink activeClassName='high-lighted' to="/history" onClick={selectNav}>History</NavLink></li>
          <li><NavLink activeClassName='high-lighted' to="/gallery" onClick={selectNav}>Gallery</NavLink></li>
          <li><NavLink activeClassName='high-lighted' to="/career" onClick={selectNav}>Career</NavLink></li>
          <li><NavLink activeClassName='high-lighted' to="/contact" onClick={selectNav}>Contact</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;