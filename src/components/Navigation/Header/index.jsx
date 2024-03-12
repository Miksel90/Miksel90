import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderNavigation = ({ brandName }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-1">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            className="justify-content-end"
            variant="underline"
            defaultActiveKey="/home"
            style={{ fontSize: "20px" }}
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigation;
