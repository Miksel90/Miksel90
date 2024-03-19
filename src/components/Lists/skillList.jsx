import ListGroup from "react-bootstrap/ListGroup";

function SkillList() {
  return (
    <ListGroup
      horizontal
      className="fs-5 d-flex flex-wrap justify-content-center"
    >
      <ListGroup.Item>Netlify</ListGroup.Item>
      <ListGroup.Item>GitHub</ListGroup.Item>
      <ListGroup.Item>Git</ListGroup.Item>
      <ListGroup.Item>Wordpress</ListGroup.Item>
      <ListGroup.Item>API</ListGroup.Item>
      <ListGroup.Item>Agile Work-Process</ListGroup.Item>
      <ListGroup.Item>Figma/Adobe</ListGroup.Item>
      <ListGroup.Item>Ux- Design</ListGroup.Item>
    </ListGroup>
  );
}

export default SkillList;
