import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-lg-start bg-white d-flex justify-content-around"
      style={{ zIndex: 1 }}
    >
      <div className="row align-items-center">
        <div className="col-12">
          <FooterNavigation />
        </div>
      </div>
      <div className="col-2 mt-3">
        <p className="text-center align-items-center d-flex justify-content-center">
          © 2023 Mikael Selstad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
