import React from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="info" dark>
          <NavbarBrand href="/" className="mr-auto">Carl Brunngård | Front-End Developer</NavbarBrand>
            <Nav navbar>
              <NavItem>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
