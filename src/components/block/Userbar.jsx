import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/authSlice";
import LinkBase from "@/components/base/LinkBase";
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/store/cartSlice";

const Userbar = () => {
  const user = useSelector((state) => state.auth.user);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkCls =
    "text-slate-50 hover:text-slate-300 transition duration-300 ease-in-out relative";

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="flex gap-10">
      <LinkBase tag="link" to="/cart" className={linkCls}>
        Sepetim
        {totalQuantity > 0 && (
          <span className="absolute -top-1 right-0 translate-x-full rounded-full bg-primary-dark px-2 py-1 text-xs font-bold text-white">
            {totalQuantity}
          </span>
        )}
      </LinkBase>
      {user ? (
        <LinkBase tag="div" onClick={handleLogout} className={linkCls}>
          Çıkış Yap
        </LinkBase>
      ) : (
        <LinkBase tag="link" to="/login" className={linkCls}>
          Giriş Yap
        </LinkBase>
      )}
    </div>
  );
};

export default Userbar;
