import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const FooterNavigation = () => {
  return (
    <>
      <Nav
        className="justify-content-center"
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
          Skills
        </Nav.Link>
      </Nav>
    </>
  );
};

export default FooterNavigation;
