import { useRef, useCallback } from "react";

export const useFocus = () => {
  const ref = useRef(null);

  const focusEl = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return [ref, focusEl];
};
