import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import HomePage from "./components/pages/Home/index.jsx";
// import ContactPage from "./pages/Contact/index.jsx";
// import NotFound from "./pages/Error/index.jsx";
// import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/Cart";
// import CheckoutPage from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
export default App;
