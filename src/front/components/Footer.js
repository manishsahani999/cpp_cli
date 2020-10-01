import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    NavItem,
    NavLink, Container, Row, Col
} from 'reactstrap';

const FooterContainer = () => {
    return (
        <>
            <section className="fryday-footer">
                <Container>
                    <Row>
                        <Col>
                            <ul style={{listStyleType: 'none'}}>
                                <li style={{float: 'left'}}  className="mr-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="35" height="35"
                                            viewBox="0 0 24 24"
                                            style={{ fill: '#000000' }}>    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="35" height="35"
                                            viewBox="0 0 48 48"
                                            style={{ fill: '#000000' }}><path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"></path></svg>
                                    </span>
                                </li>
                            </ul>
                            <h1 style={{ fontWeight: '100' }} className="mt-5">Wire Under the Ocean</h1>
                            <span className="text-muted">
                                supercharge you c++ command line interface development
                            </span>
                        </Col>
                        {/* <Col md="3" className="text-justify"> */}
                        {/* <h4>About Us</h4> */}
                        {/* <p>
                                Stack is a robust multipurpose HTML template designed with modularity at the core. Easily combine over 290 interface blocks to create websites for any purpose.
                            </p> */}
                        {/* </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FooterContainer;
