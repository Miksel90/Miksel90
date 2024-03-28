import styles from "./Lists.module.css";

function SkillList() {
  return (
    <ul
      className={`list-group list-group-horizontal fs-3 gap-2 d-flex flex-wrap ${styles.listGroup}`}
    >
      <li className={styles.listItem}>Figma</li>
      <li className={styles.listItem}>Adobe</li>
      <li className={styles.listItem}>UX-Design</li>
      <li className={styles.listItem}>Github</li>
      <li className={styles.listItem}>Git</li>
      <li className={styles.listItem}>Github Projects</li>
      <li className={styles.listItem}>Agile & Scrum</li>
      <li className={styles.listItem}>Kanban</li>
      <li className={styles.listItem}>Gantt</li>
      <li className={styles.listItem}>Trello</li>
      <li className={styles.listItem}>Wordpress</li>
      <li className={styles.listItem}>CMS</li>
      <li className={styles.listItem}>Netlify</li>
      <li className={styles.listItem}>WCAG</li>
      <li className={styles.listItem}>Responsiveness</li>
      <li className={styles.listItem}>SEO</li>
      <li className={styles.listItem}>Webdev</li>
      <li className={styles.listItem}>Testing</li>
    </ul>
  );
}

export default SkillList;
