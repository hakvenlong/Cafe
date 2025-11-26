// src/AppRoutes.jsx  (or wherever you keep it)
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import FAQs from "../pages/FAQs";
import PrivacyPolicy from "../pages/Policy";
import NotFound from "../pages/NotFound";

// User Pages
import Product from "../features/UserProfile/pages/Product";
import ProductDetail from "../features/UserProfile/pages/ProductDetail";
import Listing from "../features/UserProfile/pages/CafeListing";
import ListingDetail from "../features/UserProfile/pages/CafeListingDetail";
import Wishlist from "../features/UserProfile/pages/Wishlist";
import Checkout from "../features/UserProfile/pages/Checkout";
import Contact from "../features/UserProfile/pages/Contact";
import Testimonial from "../features/UserProfile/pages/Testimonial";
import Reservation from "../features/UserProfile/pages/Reservation";

// Auth Pages (open to everyone for now)
import Login from "../features/Authentication/components/Login";
import Signup from "../features/Authentication/components/Signup";
import Account from "../features/Authentication/components/Account";

// Admin Layout & Pages
import AdminLayout from '../features/Authentication/layout/AdminLayout';
import PublicLayout from '../features/UserProfile/layout/MainLayout';
import Dashboard from "../features/Authentication/pages/Dashboard";

import AdminProducts from "../features/Authentication/pages/AdminProducts";
import AdminOrders from "../features/Authentication/pages/AdminOrders";
import AdminReservations from "../features/Authentication/pages/AdminReservations";
import AdminSettings from "../features/Authentication/pages/AdminSettings";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<PublicLayout />}>
          {/* === PUBLIC ROUTES === */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/reservation" element={<Reservation />} />

          {/* === PRODUCTS & LISTINGS === */}
          <Route path="/products" element={<Product />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/listing-details/:id" element={<ListingDetail />} />

          {/* === USER FEATURES === */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* === AUTH PAGES (open for now) === */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Route>

        {/* === USER DASHBOARD (open for now) === */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* === ADMIN PANEL (open for now – perfect for development) === */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="reservations" element={<AdminReservations />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* === 404 === */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;