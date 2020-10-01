import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Container>
            <NavbarBrand className="fryday-navbar-brand" href="/">
              Wire Under the Ocean
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/cli-plus-plus/">Get Started</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/cli-plus-plus/">API</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/docs"><NavLink style={{}}>Docs</NavLink></Link>
                </NavItem>
                <NavItem>
                  <NavLink href="">Tutorials</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="https://github.com/manishsahani999/cli-plus-plus">
                      <span>Github</span>
                  </NavLink>
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
