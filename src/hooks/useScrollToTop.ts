import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al top cada vez que cambie la ruta
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
};
