import { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaGithub, FaChrome } from "react-icons/fa";
import Styles from "./Card.module.css";

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card
        className="p-1 col-md-3"
        style={{
          height: "100%",
          minHeight: "500px",
          maxHeight: "500px",
          minWidth: "300px",
          maxWidth: "300px",
        }}
      >
        <Card.Img
          variant="top"
          style={{ height: "145px" }}
          src={project.image}
          alt={project.alt}
        />
        <Card.Body>
          <Card.Title className="fs-3 mb-3">{project.title}</Card.Title>
          <Button
            className="btn-lg bg-white border border-dark text-black m-auto"
            onClick={handleShow}
          >
            Show More
          </Button>
        </Card.Body>
        <Card.Body className={Styles.links}>
          <Card.Link className="text-dark" href={project.github}>
            <FaGithub
              style={{
                fontSize: "3.5rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />{" "}
            Github Repository
          </Card.Link>
          <Card.Link className="text-dark m-0" href={project.website}>
            <FaChrome
              style={{
                fontSize: "3.5rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />
            Website
          </Card.Link>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            style={{ height: "145px" }}
            src={project.image}
            alt={project.alt}
          />
          {project.description.map((desc, idx) => (
            <Card.Text key={idx} className="text-start mt-3 fs-5 p-2">
              {desc}
            </Card.Text>
          ))}
          <ListGroup className="list-group-flush text-start fs-6 mb-3">
            {project.skills.map((skill, idx) => (
              <ListGroup.Item key={idx}>{skill}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
