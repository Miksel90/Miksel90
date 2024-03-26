import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/Futurum.webp";

function FuturumCard() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <Card
      className="p-1 col-md-3"
      style={{ height: "100%", minHeight: "720px" }}
    >
      <Card.Img variant="top" style={{ height: "145px" }} src={imageOne} />
      <Card.Body>
        <Card.Title className="fs-1 mb-3">Futurum</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black"
          onClick={toggleList}
        >
          {showList ? "Hide" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              Futurum was our first semester project. We were to use our skills
              with Figma and then HTML/CSS to build a website for a the new
              hypotetichal musuem that was opening in our hometown.
            </Card.Text>
            <Card.Text className="text-start fs-5">
              The target audience were children aged 7-15 and young families,
              hence the playful colors. We also had to work with more text on
              this task so that was a bit of a challenge. We were not allowed to
              use any frameworks or libaries
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6 mb-3">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>Responsive</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body className="bottom-0">
        <Card.Link
          className="text-dark"
          href="https://github.com/Miksel90/Semester-project-1.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link
          className="text-dark"
          href="https://futurum-semester1.netlify.app/"
        >
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FuturumCard;
