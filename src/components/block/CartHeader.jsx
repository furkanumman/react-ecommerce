import React from "react";
import PropTypes from "prop-types";

const CartHeader = (totalQuantity) => {
  return (
    <div>
      <h1>Sepetim</h1>
      {totalQuantity === 0 && (
        <p className="text-lg font-bold text-indigo-800">Sepetiniz boş!</p>
      )}
    </div>
  );
};

CartHeader.propTypes = {
  totalQuantity: PropTypes.number,
};

export default CartHeader;
