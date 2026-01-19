import { createSlice } from "@reduxjs/toolkit";

function createBookSlice() {
  return createSlice({
    name: "books",
    initialState: {
      items: []
    },
    reducers: {
      setBooks: (state, action) => {
        state.items = action.payload;
      },
      addBook: (state, action) => {
        state.items.unshift(action.payload);
      }
    }
  });
}

const slice = createBookSlice();

export const { setBooks, addBook } = slice.actions;

export default slice.reducer;