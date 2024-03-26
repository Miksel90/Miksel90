import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/poketown.webp";

function PokeCard() {
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
        <Card.Title className="fs-1 mb-3">Pokètown</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black m-auto"
          onClick={toggleList}
        >
          {showList ? "Hide" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              This was a project for the first two courses at my second year a
              Noroff. The task was to build a social platform of some sort. In
              our first course we had two weeks to design the site using
              Bootstrap. We were not allowed to add custom styling.
            </Card.Text>
            <Card.Text className="text-start fs-5">
              The task was to use the previous project and implement features
              with Javascript. All information was to be gathered from the
              Noroff Social API using different methods. GET, PUT, POST and
              DELETE. We also had to save the access token in local storage. The
              user could communicate with others users.
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6 mb-3">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS/Sass</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
          <ListGroup.Item>API fetch</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-dark"
          href="https://github.com/Miksel90/css-frameworks-ca.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link className="text-dark" href="https://poketown.netlify.app/">
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PokeCard;
