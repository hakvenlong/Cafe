// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import { Products } from "../data/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    Products().then((res) => setProducts(res));
  }, []);

  return products;
};
