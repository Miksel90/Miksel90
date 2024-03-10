import HeaderNavigation from "../../Navigation/Header/index.jsx";

const Header = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        padding: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <HeaderNavigation brandName="Mikael Selstad" />
    </header>
  );
};

export default Header;
