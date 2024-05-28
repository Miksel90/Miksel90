import { Helmet } from "react-helmet";
import projectsData from "../../Cards/projectData.js";
import ProjectCard from "../../Cards/index.jsx";

function ProjectsPage() {
  return (
    <main>
      <Helmet>
        <title>Projects | Mikael Selstad</title>
      </Helmet>
      <div className="bg-black bg-opacity-10">
        <h1 className="text-white p-5  shadowText ">Projects</h1>
        <div className="container-fluid d-flex justify-content-center flex-column flex-wrap m-auto">
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
