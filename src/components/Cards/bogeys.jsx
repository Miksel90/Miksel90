import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/Bogeys.webp";

function BogeysCard() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <Card
      className="p-1 col-md-3"
      style={{ height: "100%", minHeight: "700px", maxHeight: "700px" }}
    >
      <Card.Img variant="top" src={imageOne} />
      <Card.Body>
        <Card.Title className="fs-1 mb-3">Bogeys & Bunkers</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black m-auto"
          onClick={toggleList}
        >
          {showList ? "Hide" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              This was our end of year one exam. We had a ton of freedom but we
              were not allowed to use and frameworks or libaries. Everything is
              built with HTML/CSS/JS. The task was to build a blogsite were the
              content was dynamically built after fetching data from Wordpress.
            </Card.Text>
            <Card.Text className="text-start fs-5">
              The index page had to include a working image carousel which
              showcased the latest posts. All specific blog pages had to be
              dynamically built and all images on the pages had to modal
              functionality.
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6 mb-3">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Responsive</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
          <ListGroup.Item>Wordpress</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-dark"
          href="https://github.com/Noroff-FEU-Assignments/project-exam-1-Miksel90.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link
          className="text-dark"
          href="https://bogeys-bunkers.netlify.app/"
        >
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BogeysCard;
