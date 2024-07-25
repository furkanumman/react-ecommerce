import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartGuard = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!user) {
      navigate("/cart/guest");
    } else {
      setChecked(true);
    }
  }, [user]);

  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return null;
  }

  return <div>{children}</div>;
};

export default CartGuard;
