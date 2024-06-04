import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slicers/userSlice";
import storeReducer from "./Slicers/storeSlice";

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("market", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  saveStateToLocalStorage(storeAPI.getState().store);
  return result;
};

const store = configureStore({
  reducer: {
    user: userSlice,
    store: storeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
