import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  haberler: [],
  loading: true,
};

export const getData = createAsyncThunk("haberSlice/getData", async () => {
  const response = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5810b307ff904f19b946ceba4499a11b"
  );

  return response.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState,
  reducers: {
    // Normal fonksiyonlarım için bu yapı
    clearHaber: () => {},

    // Database verileri için
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading=true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        
        state.haberler=action.payload;
        state.loading=false;
      });
  },
});

export const { clearHaber } = haberSlice.actions;

export default haberSlice.reducer;
