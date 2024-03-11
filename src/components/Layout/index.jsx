import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
