import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/rainydays.webp";

function RainyDaysCard() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <Card
      className="p-1 col-md-3"
      style={{ height: "100%", minHeight: "700px" }}
    >
      <Card.Img variant="top" src={imageOne} />
      <Card.Body>
        <Card.Title className="fs-1 mb-3">RainyDays</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black"
          onClick={toggleList}
        >
          {showList ? "Hide Less" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              This was a cross course project that we worked on in segments over
              my first year at Noroff. This was my first assignment within
              design and HTML/CSS. I had never thought about SEO & WCAG before,
              so this was a steep learning curve from start to finish.
            </Card.Text>
            <Card.Text className="text-start fs-5">
              After focusing on design, we were allowed to start implementing
              JavaScript and we added pages that were dynamically built after
              making an API call to WordPress. As of now, it`s not completely
              finished. We were not allowed to use any frameworks or libraries.
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>Responsive</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-dark"
          href="https://github.com/Noroff-FEU-Assignments/cross-course-project-Miksel90.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link
          className="text-dark"
          href="https://rainydays-2.netlify.app/"
        >
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default RainyDaysCard;
