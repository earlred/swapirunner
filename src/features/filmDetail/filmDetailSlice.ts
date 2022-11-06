import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState} from "../../redux";

export interface filmState {
  value: [] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: filmState = {
  value: [],
  status: "idle",
};

export const filmDetailSlice = createSlice({
  name: "filmDetail",
  initialState,
  reducers: {
    filmDetailSelect: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

//Export the reducer functions
export const { filmDetailSelect } = filmDetailSlice.actions;
export const filmDetailSelector = (state: RootState) => state.filmDetailKey.value;
export default filmDetailSlice.reducer;
