import BaseLayout from "./BaseLayout";
import CartGuard from "@/hoc/CartGuard";

const CartLayout = ({ children }) => {
  return (
    <BaseLayout>
      <CartGuard>{children}</CartGuard>
    </BaseLayout>
  );
};

export default CartLayout;
