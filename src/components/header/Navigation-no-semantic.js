// Navigation Bar to navigate to different pages:
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchNavigation} from '../../actions';


class Navigation extends Component {
  state = {}

  componentDidMount(){
    this.props.fetchNavigation();
    console.log(this.props.currentPage);
  }

  render() {
    return (
      <div>
        <ul className="nav">
          <li><NavLink to="/" exact activeClassName='high-lighted'>Home</NavLink></li>
          <li><NavLink to="/history" strict activeClassName='active'>History</NavLink></li>
          <li><NavLink to="/ensembles" activeClassName='active'>Enssembles</NavLink></li>
          <li><NavLink to="/career" activeClassName='active'>Career</NavLink></li>
          <li><NavLink to="/contact" activeClassName='active'>Contact</NavLink></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {currentPage:state.currentPage}
}

export default connect(mapStateToProps,{fetchNavigation})(Navigation)