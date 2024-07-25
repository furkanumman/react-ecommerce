import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewCart, updateCart } from "@/utils/request";

export const storageKey = "cart";

const initialState = {
  id: null,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: null,
  totalProducts: 0,
  totalQuantity: 0,
  changed: false,
  isLoading: false,
  error: null,
};

const persistedCart = localStorage.getItem(storageKey)
  ? JSON.parse(localStorage.getItem(storageKey))
  : initialState;

export const addNewCartAsync = createAsyncThunk(
  "cart/addNewCart",
  async ({ userId, products }, thunkAPI) => {
    try {
      const response = await addNewCart(userId, products);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async ({ cartId, products }, thunkAPI) => {
    try {
      const response = await updateCart(cartId, products);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfilled = (state, action) => {
  state.isLoading = false;
  state.id = action.payload.id;
  state.products = action.payload.products;
  state.total = action.payload.total;
  state.totalQuantity = action.payload.totalQuantity;
  state.discountedTotal = action.payload.discountedTotal;
  state.userId = action.payload.userId;
  state.totalProducts = action.payload.totalProducts;
};

const handleRejected = (action) => {
  state.isLoading = true;
  state.error = null;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: persistedCart,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find((x) => x.id === newItem.id);
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
      state.total += action.payload.discountedPrice;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((x) => x.id === id);
      if (existingItem) {
        state.changed = true;
        state.totalQuantity--;
        state.total -= existingItem.discountedPrice;
        if (existingItem.quantity === 1) {
          state.products = state.products.filter((item) => item.id != id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.totalQuantity = 0;
      state.changed = false;
    },
    clearItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((x) => x.id === id);
      state.products = state.products.filter((item) => item.id != id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.total -= existingItem.discountedPrice * existingItem.quantity;
    },
  },
  extraReducers: (builder) => {
    builder
      // addCartAsync
      .addCase(addNewCartAsync.pending, handlePending)
      .addCase(addNewCartAsync.fulfilled, handleFullfilled)
      .addCase(addNewCartAsync.rejected, handleRejected)
      // updateCartAsync
      .addCase(updateCartAsync.pending, handlePending)
      .addCase(updateCartAsync.fulfilled, handleFullfilled)
      .addCase(updateCartAsync.rejected, handleRejected);
  },
});

export const { addItem, removeItem, clearCart, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
