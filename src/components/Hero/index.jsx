import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import backgroundImage from "../images/background-2.jpg";

const Hero = () => {
  return (
    <Container fluid>
      <Image src={backgroundImage} fluid />
    </Container>
  );
};

export default Hero;
