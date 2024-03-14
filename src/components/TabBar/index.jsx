import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ThisIsMeTab from "../TabContent/thisIsMe.jsx";
import CareerTab from "../TabContent/career.jsx";
import PassionsTab from "../TabContent/passions.jsx";
import styles from "./Tab.module.css";

function TabBar() {
  return (
    <Tabs defaultActiveKey="me" id="tabBar" className={styles.tabBar} justify>
      <Tab
        eventKey="me"
        title="This Is Me"
        className={styles.tabItem}
        id="me-tab"
      >
        <ThisIsMeTab />
      </Tab>
      <Tab
        eventKey="career"
        title="Career"
        className={styles.tabItem}
        id="career-tab"
      >
        <CareerTab />
      </Tab>
      <Tab
        eventKey="passions"
        title="Passions"
        className={styles.tabItem}
        id="passions-tab"
      >
        <PassionsTab />
      </Tab>
    </Tabs>
  );
}

export default TabBar;
