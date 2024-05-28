import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const FooterNavigation = () => {
  return (
    <>
      <Nav
        className="justify-content-evenly flex-row align-items-center fs-5"
        activeKey="/home"
        style={{ fontSize: "22px", Color: "primary" }}
      >
        <Nav.Link as={Link} to="/" style={{ color: "#000" }}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" style={{ color: "#000" }}>
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/projects" style={{ color: "#000" }}>
          Projects
        </Nav.Link>
      </Nav>
    </>
  );
};

export default FooterNavigation;
