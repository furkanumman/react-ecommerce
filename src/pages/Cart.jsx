import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import { formatPrice } from "@/utils/helpers";
import Button from "@/components/base/Button";
import { addNewCartAsync, updateCartAsync } from "@/store/cartSlice";
import CartHeader from "@/components/block/CartHeader";
import CartTable from "@/components/block/CartTable";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalQuantity, total } = useSelector((state) => state.cart);

  const userId = useSelector((state) => state.auth?.user?.id);

  const handleClearCart = () => dispatch(clearCart());

  const handleCompleteOrder = () => {
    id
      ? dispatch(updateCartAsync({ cartId: id, products }))
      : dispatch(addNewCartAsync({ userId, products }));
  };

  return (
    <div className="container">
      <div className="rounded-lg bg-slate-50 px-3 py-6 text-slate-800 shadow-md">
        <CartHeader totalQuantity={totalQuantity} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <CartTable />
          <div className="flex items-end justify-center md:col-span-1">
            {totalQuantity > 0 && (
              <Button onClick={handleCompleteOrder}>Siparişi Tamamla</Button>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <Button onClick={handleClearCart} size="sm" variant="dark">
            Sepeti Temizle
          </Button>

          {totalQuantity > 0 && (
            <p className="text-lg font-bold text-indigo-800">
              Toplam Tutar: {formatPrice(total)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
