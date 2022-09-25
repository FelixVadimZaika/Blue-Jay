import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,BASKET_ROUTE} from "../utils/consts";
import {Badge, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import logB from '../assets/Group.png'


const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar style={{background:"#232F3E"}}  variant="dark" >
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>
                    <img src={logB} />

                    Blue-Jay
                </NavLink>
                {/*<Form className="d-flex">*/}
                {/*    <Form.Control*/}
                {/*        type="search"*/}
                {/*        placeholder="Search"*/}
                {/*        className="me-2"*/}
                {/*        aria-label="Search"*/}
                {/*    />*/}
                {/*    <Button variant="outline-success">Пошук</Button>*/}
                {/*</Form>*/}
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(BASKET_ROUTE)}
                        >
                            Корзина <Badge bg="secondary"></Badge>
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            AdminPan
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-lg-3"
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;