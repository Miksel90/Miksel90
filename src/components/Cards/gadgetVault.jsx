import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGithub, FaChrome } from "react-icons/fa";
import imageOne from "../images/Projects/gadgetvault.webp";

function GadgetVaultCard() {
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
        <Card.Title className="fs-1 mb-3">GadgetVault</Card.Title>
        <Button
          className=" btn-lg bg-white border border-dark text-black m-auto"
          onClick={toggleList}
        >
          {showList ? "Hide" : "Show More"}
        </Button>
        {showList && (
          <>
            <Card.Text className="text-start mt-3 fs-5">
              This was ,y first react project at Noroff. The task was to build a
              E-com shop using the noroff E-commerce API.The site has a
              lookahead search function. The use can add items to the cart and
              remove them. The user can also see the total amount of the cart.
              The user can also see the details of the product and reviews.
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush text-start fs-6 mb-3">
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS modules</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>API fetch</ListGroup.Item>
          <ListGroup.Item>WCAG</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-dark"
          href="https://github.com/Miksel90/Js-Frameworks-CA.git"
        >
          <FaGithub className="fs-3 m-1 text-black" />
          Github Repository
        </Card.Link>
        <Card.Link
          className="text-dark"
          href="https://vaultgadgets.netlify.app/"
        >
          <FaChrome className="fs-3 m-1" />
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default GadgetVaultCard;
