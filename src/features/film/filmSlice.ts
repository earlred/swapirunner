import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState} from "../../redux/store";

export interface filmState {
  value: [] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: filmState = {
  value: [],
  status: "idle",
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    filmSelect: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

//Export the reducer functions
export const { filmSelect } = filmSlice.actions;
export const filmSelector = (state: RootState) => state.filmKey.value;
export default filmSlice.reducer;
