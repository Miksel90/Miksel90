import ListGroup from "react-bootstrap/ListGroup";

function LanguageList() {
  return (
    <ListGroup
      horizontal
      className="fs-3 d-flex flex-wrap justify-content-center"
    >
      <ListGroup.Item>HTML</ListGroup.Item>
      <ListGroup.Item>CSS/SASS</ListGroup.Item>
      <ListGroup.Item>JavaScript</ListGroup.Item>
      <ListGroup.Item>React</ListGroup.Item>
      <ListGroup.Item>Bootstrap</ListGroup.Item>
      <ListGroup.Item>Tailwind</ListGroup.Item>
    </ListGroup>
  );
}

export default LanguageList;
