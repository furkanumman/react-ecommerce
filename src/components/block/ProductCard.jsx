import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/base/Button";
import Counter from "@/components/block/Counter";
import { formatPrice, calcDiscountedPrice, slugify } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "@/store/cartSlice";
import cn from "classnames";
import LinkBase from "@/components/base/LinkBase";

import { toast } from "react-toastify";

const ProductCard = ({
  id,
  title,
  price,
  rating,
  discountPercentage,
  brand,
  category,
  thumbnail,
  className,
}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.products);
  const productInCart = cartItems.find((item) => item.id === id);
  const discountedPrice = calcDiscountedPrice(price, discountPercentage, "int");

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        discountedPrice,
        thumbnail,
        quantity: 1,
      }),
    );
    toast.success(`${title} sepete eklendi!`);
  };

  const handleRemoveToCart = () => {
    dispatch(removeItem(id));
    toast(`${title} sepete eklendi!`), { theme: "colored" };
  };

  const handleClearItem = () => {
    dispatch(clearItem(id));
  };

  const cardCls = cn(
    "flex flex-col justify-around item-stretch gap-2",
    "rounded-lg bg-slate-50 p-4 text-slate-800 shadow-md hover:shadow-lg",
  );
  return (
    <div className={cardCls}>
      <LinkBase tag="link" to={`/product/${slugify(title)}/${id}`}>
        <img src={thumbnail} alt={title} className="mb-4 h-48 object-contain" />
      </LinkBase>

      <LinkBase tag="link" to={`/category/${category}`}>
        <p className="text-xs">{category}</p>
      </LinkBase>

      <LinkBase tag="link" to={`/product/${slugify(title)}/${id}`}>
        <p className="text-lg font-bold leading-tight tracking-tight">
          {title}
        </p>
      </LinkBase>

      <p className="text-md my-3 self-end font-bold text-indigo-600">
        <span className="mr-4 text-sm text-slate-400 line-through">
          {formatPrice(price)}
        </span>
        {formatPrice(discountedPrice)}
      </p>
      {!productInCart ? (
        <Button size="sm" className="self-center" onClick={handleAddToCart}>
          Sepete Ekle
        </Button>
      ) : (
        <Counter
          quantity={productInCart.quantity}
          onIncrease={handleAddToCart}
          onDecrease={handleRemoveToCart}
          onClearItem={handleClearItem}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductCard;
