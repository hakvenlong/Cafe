import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../pages/Home/Home";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import CafeListing from "../pages/Listing/CafeListings";
import Product from "../features/products/Product";
import Checkout from "../features/Payment/Checkout";
import PrivacyPolicy from "../pages/Home/Policy";
import ScrollToTop from "../hooks/ScrollToTop";
import About from "../pages/Home/About";
import FAQs from "../pages/Home/FAQs";
import ProductDetail from "../features/products/ProductDetail";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<CafeListing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product-details/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
