import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import HomePage from "./components/pages/Home/index.jsx";
import AboutPage from "./components/pages/About/index.jsx";
import NotFound from "./components/pages/Error/index.jsx";
import ProjectsPage from "./components/pages/Projects/index.jsx";
import Translator from "./components/Translator/index.jsx";

const App = () => {
  return (
    <>
      <Translator>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Translator>
    </>
  );
};
export default App;
