import PropTypes from "prop-types";
import { formatPrice } from "@/utils/helpers";
import Counter from "@/components/block/Counter";
import { addItem, removeItem, clearItem } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => dispatch(addItem(product));
  const handleRemoveToCart = (id) => dispatch(removeItem(id));
  const handleClearItem = (id) => dispatch(clearItem(id));

  return (
    <table className="w-full md:col-span-3">
      <tbody>
        {products &&
          products.map((item) => (
            <tr key={item.id}>
              <td className="w-2/5 py-4">{item.title}</td>
              <td className="w-1/5 px-4 text-right">
                <span className="mr-2 text-sm text-slate-500 line-through">
                  {formatPrice(item.price)}
                </span>
                <span className="text-sm text-green-900">
                  {formatPrice(item.discountedPrice)}
                </span>
              </td>

              <td className="w-1/5">
                <Counter
                  quantity={item.quantity}
                  onIncrease={() => handleAddToCart(item)}
                  onDecrease={() => handleRemoveToCart(item.id)}
                  onClearItem={() => handleClearItem(item.id)}
                />
              </td>

              <td className="w-1/5 text-right text-lg font-semibold text-green-900">
                {formatPrice(item.discountedPrice * item.quantity)}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

CartTable.propTypes = {};

export default CartTable;
