import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import LanguageList from "../../Lists/languageList.jsx";
import SkillList from "../../Lists/skillList.jsx";
import RainyDaysCard from "../../Cards/rainydays.jsx";
import FuturumCard from "../../Cards/futurum.jsx";
import BogeysCard from "../../Cards/bogeys.jsx";

function ProjectsPage() {
  return (
    <main>
      <Helmet>
        <title>Projects | Mikael Selstad</title>
      </Helmet>
      <Container className=" p-3 d-flex justify-content-center align-items-center flex-column flex-wrap m-auto">
        <h1 className="text-white shadowText mt-3 "> Skills & Projects</h1>
        <Row className="mb-3">
          <p className="shadowText text-white fs-3">My Languages</p>
          <LanguageList />
        </Row>
        <Row className="mb-3">
          <p className="shadowText text-white fs-3">Skills</p>
          <SkillList />
        </Row>
        <Row className="gap-3 d-flex justify-content-evenly">
          <p className="shadowText text-white fs-1 fw-bold p-1">Projects</p>
          <BogeysCard />
          <FuturumCard />
          <RainyDaysCard />
        </Row>
      </Container>
    </main>
  );
}

export default ProjectsPage;
