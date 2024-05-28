import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-lg-start bg-white d-flex justify-content-around flex-column flex-md-row align-items-center p-3 mt-3"
      style={{ zIndex: 1, bottom: 0, width: "100%" }}
    >
      <div className="row align-items-center">
        <div className="col-12">
          <FooterNavigation />
        </div>
      </div>
      <div className="col-2 mt-3">
        <p className="text-center align-items-center d-flex justify-content-center">
          © 2024 Mikael Selstad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
