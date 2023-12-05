import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from '../assets/vlogo.png';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import navIcon4 from '../assets/img/nav-icon4.svg';

// import navIcon5 from '../assets/img/contrast-icon.svg';
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export default function NavBar  (){

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img
              src= {image}
              height='100'
              width= 'auto'
              alt=''
              loading='lazy'
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <div class="navbar">
  <a class="nav-link nav-link-ltr" href="#">Home</a>
  <a class="nav-link nav-link-ltr" href="#">About</a>
  <a class="nav-link nav-link-ltr" href="#">Contact</a>
  <a class="nav-link nav-link-ltr" href="#">Blog</a>
</div>

              {/* <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="https://linkedin.com/"><img src={navIcon1} alt="" /></a>
                <a href="https://facebook.com/"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/"><img src={navIcon4} alt="" /></a> */}
                {/* <a href="#"><img src={navIcon5} alt="" /></a> */}
              </div>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

