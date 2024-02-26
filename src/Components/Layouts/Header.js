import React, {useState, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Styles/HeaderStyle.css";
import Logo from "../../assets/logo/logo.png";
const Header = () => {
  const [navSticky, setNavSticky] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = window.scrollY;
    scrollValue > 100 ? setNavSticky(true) : setNavSticky(false);

 }
 window.addEventListener("scroll", changeValueOnScroll);
  return (
    <header>

<Navbar collapseOnSelect expand="lg" className={navSticky ? "sticky" : ""}>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Link to="/" className='logo'>
        <img src={Logo} alt="logo" className="img-fluid" />        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to = "/" >Home</Nav.Link>
            <Nav.Link as={Link} to = "/about">about</Nav.Link>
            <Nav.Link as={Link} to = "/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to = "/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to = "/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to = "/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to = "/contact">
              <div className='cart'>
    <i className="bi bi-bag fs-5"></i>
    <em className='roundpoint'>2</em>
</div>

              </Nav.Link>

            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
