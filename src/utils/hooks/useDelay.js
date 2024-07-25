import { useState, useEffect } from "react";

export const useDelay = (time) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDone(true);
    }, time);

    return () => clearTimeout(delay);
  }, [time]);

  return done;
};
