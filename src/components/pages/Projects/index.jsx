import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Scroller from "../../Scroller/index.jsx";
import LanguageList from "../../Lists/languages.jsx";
import SkillList from "../../Lists/skills.jsx";
import RainyDaysCard from "../../Cards/rainydays.jsx";
import FuturumCard from "../../Cards/futurum.jsx";
import BogeysCard from "../../Cards/bogeys.jsx";
import PokeCard from "../../Cards/poketown.jsx";
import VintageBrokersCard from "../../Cards/vintageBrokers.jsx";
import GadgetVaultCard from "../../Cards/gadgetVault.jsx";

function ProjectsPage() {
  return (
    <main>
      <Helmet>
        <title>Projects | Mikael Selstad</title>
      </Helmet>
      <Container className=" fluid p-3 d-flex justify-content-center flex-column flex-wrap m-auto">
        <h1 className="text-white shadowText mt-3 "> Skills & Projects</h1>
        <Row className="">
          <p className="shadowText text-white fs-2 text-start">Languages</p>
          <Col className=" d-flex justify-content-around">
            <Scroller>
              <LanguageList />
            </Scroller>
          </Col>
        </Row>
        <Row className="">
          <p className="shadowText text-white fs-2 text-start">Skills</p>
          <Col className=" d-flex justify-content-around">
            <Scroller>
              <SkillList />
            </Scroller>
          </Col>
        </Row>
        <Row className="gap-3 d-flex justify-content-evenly">
          <p className="shadowText text-white fs-1 text-start p-1">Projects</p>
          <GadgetVaultCard />
          <VintageBrokersCard />
          <PokeCard />
          <BogeysCard />
          <FuturumCard />
          <RainyDaysCard />
        </Row>
      </Container>
    </main>
  );
}

export default ProjectsPage;
