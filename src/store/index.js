import { configureStore } from "@reduxjs/toolkit";
import authRecuder from "./authSlice";
import productsRecuder from "./productsSlice";
import cartRecuder, { storageKey } from "./cartSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  if (
    action.type === "cart/addItem" ||
    action.type === "cart/removeItem" ||
    action.type === "cart/clearItem" ||
    action.type === "cart/clearCart"
  ) {
    localStorage.setItem(storageKey, JSON.stringify(state.cart));
  }
  return result;
};

const store = configureStore({
  reducer: {
    auth: authRecuder,
    products: productsRecuder,
    cart: cartRecuder,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});

export default store;
