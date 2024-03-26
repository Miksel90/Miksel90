import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/VintageBrokers.webp";

function VintageBrokersCard() {
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
        <Card.Title className="fs-1 mb-3">Vintage Brokers</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black m-auto"
          onClick={toggleList}
        >
          {showList ? "Hide" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              This was our exam for the third semester. We had to use a CSS
              framework, and everything is built with HTML/CSS/JS. The task was
              to build an auction site were the content was dynamically built
              after using different API calls.
            </Card.Text>
            <Card.Text className="text-start fs-5">
              Only registered users can add new items, bid on items, and see the
              latest bids. All users can browse the site and see the latest
              items. The site is built with a mobile first approach. All images
              are created with AI.
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6 mb-3">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS/SASS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
          <ListGroup.Item>API fetch</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-dark"
          href="https://github.com/Miksel90/SemesterProject2.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link
          className="text-dark"
          href="https://vintagebrokers.netlify.app/"
        >
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default VintageBrokersCard;
