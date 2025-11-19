import { useState, useEffect } from "react";

export const usePlaceholder = (delay = 1000) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return loaded;
};
