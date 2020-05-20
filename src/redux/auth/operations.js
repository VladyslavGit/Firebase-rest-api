import types from "./types";
// import { services } from "../../services/services";

export const registerUser = (param) => async (dispatch, getState) => {
  console.log("param REGISTR", param);
  //   const data = await services.createUser(param);
  //   if (!data) {
  //     dispatch({ type: types.USER_SIGNOUT, payload: {} });
  //   } else {

  //     dispatch({ type: types.REGISTR_USER, payload: data.data });
  //   }
};

export const loginUser = (param) => async (dispatch, getState) => {
  console.log("param LOGIN", param);

  //   const data = await services.userSignIn(param);
  //   if (!data) {
  //     dispatch({ type: types.USER_SIGNOUT, payload: {} });
  //   } else {
  //     dispatch({ type: types.LOGIN_USER, payload: data.data });
  //   }
};
export const logoutUser = (param) => async (dispatch, getState) => {
  // console.log("param LOGOUT", param);

  dispatch({ type: types.USER_SIGNOUT, payload: {} });
};
