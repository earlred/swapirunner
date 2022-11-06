import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux";
import { getFilms } from "../../API/getFilms";

export interface filmsState {
  value: any[] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: filmsState = {
  value: [],
  status: "idle",
};

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await getFilms();
    console.log("filmsSlice", response.data);
  return response.data;
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  // The reducers field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchFilms.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
          state.status = "idle";
          state.value = action.payload;
        });
  },
});

//Export the reducer functions
export const filmsSelector = (state: RootState) => state.filmsKey.value;
export default filmsSlice.reducer;
