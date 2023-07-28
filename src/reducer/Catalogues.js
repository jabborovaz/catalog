import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const initialState = {
  status: "",
  loading: false,
  items: null,
  page: 1,
};

export const getItems = createAsyncThunk(
  "cataloguesApi/getItems",
  async (currentPage, { rejectWithValue, dispatch }) => {
    try {
      let uri = `albums/${currentPage}/photos`;

      const { data } = await baseUrl.get(uri);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cataloguesSlice = createSlice({
  name: "cataloguesState",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state, action) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(getItems.rejected, (state, action) => {
      state.status = "rejected";
      state.loading = false;
    });
  },
});

export const { setPage } = cataloguesSlice.actions;

export default cataloguesSlice.reducer;
