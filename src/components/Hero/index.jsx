import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import backgroundImage from "../images/background-2.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container fluid>
      <Image src={backgroundImage} fluid className={styles.hero} />
    </Container>
  );
};

export default Hero;
