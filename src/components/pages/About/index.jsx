import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPage() {
  return (
    <main>
      <Container className="p-1 text-black">
        <h1>This Is Me</h1>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </main>
  );
}

export default AboutPage;
