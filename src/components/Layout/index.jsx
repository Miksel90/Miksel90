import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Backdrop from "../Backdrop";

const Layout = () => (
  <div className="page">
    <Header />
    <div className="content" style={{ position: "relative", zIndex: 3 }}>
      <Outlet />
    </div>
    <Backdrop />
    <Footer />
  </div>
);

export default Layout;
