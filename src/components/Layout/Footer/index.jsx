import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";

const Footer = () => {
  return (
    <footer
      className="text-lg-start bg-white d-flex justify-content-around"
      style={{ zIndex: 1 }}
    >
      <div className="row">
        <div className="col-12">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
