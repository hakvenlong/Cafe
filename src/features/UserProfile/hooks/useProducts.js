import { useState, useEffect } from "react";
import { Products } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    Products().then((res) => setProducts(res));
  }, []);

  return products;
};
