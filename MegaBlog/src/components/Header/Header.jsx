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
    <Navbar collapseOnSelect expand="lg" className=" bg-blacbg-body-tertiaryk text-light bg-dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}><img
          src={Logo}
          alt="Logo"
          width="80px"
          height="80px"
          className="d-inline-block align-top"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          <span className='navbar-toggler-icon' style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">{navItems1.map((item) =>
            item.active ? (
              <Nav.Link key={item.name} onClick={() => navigate(item.slug)} className='text-light py-2 my-1'>
                {item.name}
              </Nav.Link>
            ) : null
          )}
          </Nav>
          <Nav className="me-left">
            {navItem2.map((item) =>
              item.active ? (
                <Nav.Link key={item.name} onClick={() => navigate(item.slug)} className='text-light py-2 my-1'>
                  {item.name}
                </Nav.Link>
              ) : null
            )}
            {authStatus && (
              <Nav.Link className='text-light py-2 my-1'><LogoutBtn /></Nav.Link>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header