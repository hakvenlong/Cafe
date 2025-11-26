import { useState, useEffect } from "react";
import { CafeListing as fetchCafeListing } from "../data/products";

export const useCafeListing = () => {
  const [cafeListing, setCafeListing] = useState([]);

  useEffect(() => {
    fetchCafeListing().then((res) => setCafeListing(res));
  }, []);

  return cafeListing;
};
