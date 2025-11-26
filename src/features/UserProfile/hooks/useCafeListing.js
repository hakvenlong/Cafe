import { useState, useEffect } from "react";
import { CafeListing as fetchCafeListing } from "../services/products";

export const useCafeListing = () => {
  const [cafeListing, setCafeListing] = useState([]);

  useEffect(() => {
    fetchCafeListing().then((res) => setCafeListing(res));
  }, []);

  return cafeListing;
};
