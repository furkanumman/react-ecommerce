import { useEffect } from "react";

export const useEscKey = (handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler]);
};
