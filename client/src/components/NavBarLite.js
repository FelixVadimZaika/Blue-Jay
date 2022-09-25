import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBarLite = () => {
    return (
            <Navbar style={{background:"#1E74DF", height:30}} expand="lg" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link>Про нас</Nav.Link>
                        <Nav.Link>Карта сайту</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default NavBarLite;