// import ListGroup from "react-bootstrap/ListGroup";
// import styles from "./Lists.module.css";

// function LanguageList() {
//   return (
//     <ListGroup horizontal className="gap-2 fs-3 fw-bold d-flex flex-wrap">
//       <ListGroup.Item className={styles.listItem}>HTML</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>CSS</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>JavaScript</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>Sass</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>Bootstrap</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>tailwind</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>React</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>Sass</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>Bootstrap</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>tailwind</ListGroup.Item>
//       <ListGroup.Item className={styles.listItem}>React</ListGroup.Item>
//     </ListGroup>
//   );
// }
// export default LanguageList;

import styles from "./Lists.module.css";

function LanguageList() {
  return (
    <ul
      className={`list-group list-group-horizontal fs-3 gap-1 d-flex flex-wrap ${styles.listGroup}`}
    >
      <li className={styles.listItem}>HTML</li>
      <li className={styles.listItem}>CSS</li>
      <li className={styles.listItem}>JavaScript</li>
      <li className={styles.listItem}>Sass</li>
      <li className={styles.listItem}>Bootstrap</li>
      <li className={styles.listItem}>Tailwind-CSS</li>
      <li className={styles.listItem}>React</li>
      <li className={styles.listItem}>Cypress</li>
      <li className={styles.listItem}>Jest</li>
    </ul>
  );
}

export default LanguageList;
