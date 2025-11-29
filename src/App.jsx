import AppRoutes from "./router/AppRoutes";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/globals.css';
import BackToTop from '../src/features/UserProfile/components/BackToTop'
import LoadingSpinner from "../src/features/UserProfile/components/Loading/LoadingSpinner";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <LoadingSpinner />
        <AppRoutes />
        <BackToTop />
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;