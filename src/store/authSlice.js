import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/utils/request";
import { toast } from "react-toastify";

const storageKey = "authUser";
const storedUser = JSON.parse(sessionStorage.getItem(storageKey));
const initialState = {
  user: storedUser || null,
  isLoading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials.username, credentials.password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem(storageKey);
      toast.info("Çıkış yapıldı!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        sessionStorage.setItem(storageKey, JSON.stringify(action.payload));
        toast.success(
          `${state.user.firstName} ${state.user.lastName} hoşgeldin!`,
        );
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
