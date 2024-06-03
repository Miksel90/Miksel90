import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderNavigation = ({ brandName }) => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className="bg-white p-1"
      expanded={expanded}
      ref={navRef}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontFamily: "Bebas Neue, serif",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          {brandName}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            className="justify-content-end"
            variant="underline"
            defaultActiveKey="/home"
            style={{ fontSize: "20px" }}
          >
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigation;
