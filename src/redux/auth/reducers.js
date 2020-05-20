import { createReducer } from "@reduxjs/toolkit";

import types from "./types";

const initialState = {
  userEmail: null,
  userToken: null,
  userId: null,
  weekPoints: 0,
};

const reducer = {
  [types.LOGIN_USER]: (state, { payload }) => {
    return {
      userEmail: payload.user.email,
      userToken: payload.token,
      userId: payload.user._id,
    };
  },
  [types.REGISTR_USER]: (state, { payload }) => {
    return {
      userEmail: payload.user.email,
      userToken: payload.token,
      userId: payload.user._id,
    };
  },
  [types.ADD_POINT]: (state, { payload }) => {
    return {
      ...state,
      userPoint: payload,
    };
  },
  [types.USER_TASK_POINTS]: (state, { payload }) => ({
    ...state,
    weekPoints: payload,
  }),
  [types.USER_SIGNOUT]: () => initialState,
};

export const user = createReducer(initialState, reducer);
