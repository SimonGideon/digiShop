import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";
import Cookies from "js-cookie"; // Import js-cookie

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.LOG_IN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  token: Cookies.get("token") || null, // Retrieve token from cookies if available
  user: Cookies.get("user") || null, // Retrieve user from cookies if available
  isAuthenticated: Cookies.get("token") ? true : false, // Check if token exists to set authentication status
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      // Remove token and user from cookies
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("API Response:", action.payload); // Log the API response to check its structure
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;

        // Save token and user to cookies on successful login
        Cookies.set("token", action.payload.token, { expires: 7 }); // Store for 7 days
        Cookies.set("user", JSON.stringify(action.payload.user), {
          expires: 7,
        }); // Store for 7 days (use JSON.stringify for objects)
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
