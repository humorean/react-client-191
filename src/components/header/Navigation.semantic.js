// Navigation Bar to navigate to different pages:
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchNavigation} from '../../actions';


class Navigation extends Component {
  // define initial state
  state = {activeitem:'home'}

  componentDidMount(){
    // Get current path name without the '/'
    let currentUrlPath = window.location.pathname=='/'?'home':(window.location.pathname).slice(1);
    this.setState({activeItem:currentUrlPath});
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(`Re-rendering Navigation`);
    const { activeItem } = this.state

    return (
      <Menu>
        
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            >
            <Link to='/'>Home</Link>
            
            </Menu.Item>

        
            <Menu.Item name='history' active={activeItem === 'history'} onClick={this.handleItemClick}>
              <Link to='/history'>History</Link>
            </Menu.Item>

        
            <Menu.Item name='ensembles' active={activeItem === 'ensembles'} onClick={this.handleItemClick}>
              <Link to='/ensembles'>Ensembles</Link>
            </Menu.Item>
        

        
            <Menu.Item name='career' active={activeItem === 'career'} onClick={this.handleItemClick}>
              <Link to='/career'>Career</Link>
            </Menu.Item>
        

        
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
              <Link to='/contact'>Contact Us</Link>
            </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = state =>{
  return {
    currentPage:state.currentPage
  }
}

// export default connect(mapStateToProps,{fetchNavigation})(Navigation)