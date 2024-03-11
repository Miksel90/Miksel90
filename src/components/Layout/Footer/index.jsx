import profileImage from "../../images/profilbilde.jpg";
import Image from "react-bootstrap/Image";
import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";

const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="container p-4">
        <div className="row p-1">
          <div className="col-lg-6 col-md-6 mb-4 d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "200px", height: "200px" }}
            >
              <Image
                src={profileImage}
                fluid
                roundedCircle
                className="m-0 p-0"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4 d-flex align-items-center justify-content-center fs-4">
            <p className="m-0">
              Hello, my name is Mikael Selstad, and I am a web developer. Have a
              look around on my page and see what I have to offer.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-3">
            <FooterNavigation />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
