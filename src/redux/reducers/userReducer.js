import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      nickName: null,
      info: {
        birthdayDate: null,
      },
    },
  },

  reducers: {
    getUser: (state, { payload }) => ({
      ...state,
      user: { ...state.user, nickName: payload.name },
    }),
  },
});
