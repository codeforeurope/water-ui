import React from 'react'
import {Link} from 'react-bootstrap-router'

import {
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown
} from 'react-bootstrap'
import {message} from 'react-intl'
import {makeFormattedMessage as _} from '../_/_'

import {Msg} from './messages'
import css from './AppNavBar.css'

export default class AppNavBar extends React.Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <p>_(message`Hello, {this.props.name}`)</p>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Location</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Country</NavItem>
            <NavItem eventKey={2} href='#'>Link</NavItem>
            <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Link to='/home' activeClassName={css.navActive}><Msg s='navHome' /></Link>
            <Link to='/about' activeClassName={css.navActive}><Msg s='navAbout' /></Link>
            <Link to='/location' activeClassName={css.navActive}><Msg s='navLocation' /></Link>
            <NavItem eventKey={1} href='#'>Link Right</NavItem>
            <NavItem eventKey={2} href='#'>Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// ReactDOM.render(AppNavBar.navbarInstance, mountNode);