import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink, Container
} from 'reactstrap';

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar className="fryday-navbar" light expand="md">
          <Container style={{ maxWidth: '1240px' }}>
            <NavbarBrand className="fryday-navbar-brand" href="/">
              Wire under the ocean
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/cli-plus-plus/">Get Started</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/cli-plus-plus/">API</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Docs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Tutorials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/manishsahani999/cli-plus-plus">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarContainer;
