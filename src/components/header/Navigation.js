import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to='/'>
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            >
            Home
            </Menu.Item>
        </Link>

        <Link to='/history'>
            <Menu.Item name='history' active={activeItem === 'history'} onClick={this.handleItemClick}>
            History
            </Menu.Item>
        </Link>

        <Link to='/ensembles'>
            <Menu.Item name='ensembles' active={activeItem === 'ensembles'} onClick={this.handleItemClick}>
                Ensembles
            </Menu.Item>
        </Link>

        <Link to='/career'>
            <Menu.Item name='career' active={activeItem === 'career'} onClick={this.handleItemClick}>
                Career
            </Menu.Item>
        </Link>

        <Link to='/contact'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
                Contact Us
            </Menu.Item>
        </Link>
      </Menu>
    )
  }
}