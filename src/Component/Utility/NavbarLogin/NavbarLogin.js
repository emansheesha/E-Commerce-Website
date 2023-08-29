import React from "react";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import classes from "./NavbarLogin.module.css";
import login from "../../../images/login.png";
import logo from "../../../images/logo.png";
import cart from "../../../images/cart.png";
import { useEffect } from "react";
import { useState } from "react";
const NavbarLogin = () => {
  // to make sure that any change in user(when logout), component will be rendered again
  const [user, setUser] = useState('');
  useEffect(() => {
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      console.log(loggedUser)
      setUser(loggedUser)
    }
  }, [])
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser('')
  }
  return (
    <Navbar bg="dark" className="sticky-top" expand="lg">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className={classes.app_logo} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="أبحث"
                  className={classes.search}
                />
              </Form>
            </Nav.Link>

            <Nav.Link href="/login">
          
              {
                user != '' ? (
                  <NavDropdown title={user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user/profile">الصفحه الشخصية</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} href="/">تسجيل خروج</NavDropdown.Item>

                  </NavDropdown>
                ) :
                  (<Nav.Link href='/login'
                    className="nav-text d-flex mt-3 justify-content-center">
                    <img src={login} className="login-img" alt="login-img" />
                    <p style={{ color: "white" }}>دخول</p>
                  </Nav.Link>)
              }

            </Nav.Link>
            <Nav.Link>
              {" "}
              <Nav.Link>
                <img src={cart} className={classes.logo} alt="cart" />
                <span className={classes.text}>العربة</span>
              </Nav.Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;
