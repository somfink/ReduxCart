import { createSlice } from "@reduxjs/toolkit";

const showCartInitialState = { isCartVisible: false, notification: null };

const showCartSlice = createSlice({
  name: "ui",
  initialState: showCartInitialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = showCartSlice.actions;

export default showCartSlice;
