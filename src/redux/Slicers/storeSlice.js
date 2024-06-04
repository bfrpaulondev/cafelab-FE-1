import { createSlice } from "@reduxjs/toolkit";

// Utility function to load state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("market");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

const initialState = loadStateFromLocalStorage() || {
  items: [],
  total: 0,
  amount: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addtoMarket: (state, action) => {
      state.items.push(action.payload);
      storeSlice.caseReducers.total(state);
      storeSlice.caseReducers.Amount(state);
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
      storeSlice.caseReducers.total(state);
      storeSlice.caseReducers.Amount(state);
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        }
      }
      storeSlice.caseReducers.total(state);
      storeSlice.caseReducers.Amount(state);
    },
    total: (state) => {
      state.total = state.items.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      );
    },
    onRemove: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      storeSlice.caseReducers.total(state);
      storeSlice.caseReducers.Amount(state);
    },
    Amount: (state) => {
      state.amount = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    Clean: (state) => {
      state.items = [];
      storeSlice.caseReducers.total(state);
      storeSlice.caseReducers.Amount(state);
    },
  },
});

export const {
  addtoMarket,
  increaseQuantity,
  decreaseQuantity,
  total,
  onRemove,
  Amount,
  Clean,
} = storeSlice.actions;

export default storeSlice.reducer;
