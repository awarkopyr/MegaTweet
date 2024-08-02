import React from 'react'
import { LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../PYR-logos_black.png';

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems1 = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  const navItem2 = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ]


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}><img
        src={Logo}
        alt="Logo"
        width="80px"
        height="80px"
        className="d-inline-block align-top"
    /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">{navItems1.map((item) =>
            item.active ? (
              <Nav.Link key={item.name} onClick={() => navigate(item.slug)}>
                {item.name}
              </Nav.Link>
            ) : null
          )}
          </Nav>
          <Nav className="me-left">
            {navItem2.map((item) =>
              item.active ? (
                <Nav.Link key={item.name} onClick={() => navigate(item.slug)}>
                  {item.name}
                </Nav.Link>
              ) : null
            )}
            {authStatus && (
              <Nav.Link><LogoutBtn /></Nav.Link>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header