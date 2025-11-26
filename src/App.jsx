import AppRoutes from "./router/AppRoutes";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/globals.css';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;