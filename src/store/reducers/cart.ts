import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../types";

type CartState = {
  items: MenuItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      } else {
        alert("Este produto já está no carrinho.");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
