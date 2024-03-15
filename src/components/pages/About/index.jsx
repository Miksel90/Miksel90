import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import TabBar from "../../TabBar";

function AboutPage() {
  return (
    <main>
      <Helmet>
        <title>About Me | Mikael Selstad</title>
      </Helmet>
      <Container>
        <TabBar />
      </Container>
    </main>
  );
}

export default AboutPage;
