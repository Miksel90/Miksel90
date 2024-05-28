import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" bg-white d-flex justify-content-around flex-column flex-md-row align-items-center p-4 "
      style={{ zIndex: 1, bottom: 0, width: "100%" }}
    >
      <div className="row align-items-center">
        <div className="col-12">
          <FooterNavigation />
        </div>
      </div>
      <div className="col-6 col-md-2 align-items-center">
        <p className="text-center m-0">© 2024 Mikael Selstad</p>
      </div>
    </footer>
  );
};

export default Footer;
