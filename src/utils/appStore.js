import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

function createAppStore() {
  return configureStore({
    reducer: {
      books: bookReducer
    }
  });
}

const appStore = createAppStore();

export default appStore;