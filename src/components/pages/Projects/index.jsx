import { Helmet } from "react-helmet";
import projectsData from "../../Cards/projectData.js";
import ProjectCard from "../../Cards/index.jsx";
import { useTranslator } from "../../Translator/index.jsx";

function ProjectsPage() {
  const { translate } = useTranslator();

  return (
    <main>
      <Helmet>
        <title>Projects | Mikael Selstad</title>
      </Helmet>
      <div className="bg-black bg-opacity-10">
        <h1 className="text-white shadowText p-1 text-center">
          {translate("Projects")}
        </h1>
        <h2
          className="text-white shadowText text-center fs-5 p-2 mx-auto mb-4"
          style={{ maxWidth: "900px" }}
        >
          {translate(
            "Featured below is a list of my projects. It has been a journey and I would like to showcase how my skills have improved over the short period I`ve been coding & designing."
          )}
        </h2>
        <div className="container d-flex justify-content-center flex-column flex-wrap m-auto">
          <div className="gap-4 d-flex justify-content-evenly flex-wrap mb-4">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
