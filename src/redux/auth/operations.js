import types from "./types";
import { auth } from "../../firebase/config";

export const registerUser = ({ email, password, name }) => async (
  dispatch,
  getState
) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    const update = auth.currentUser;
    await update.updateProfile({
      displayName: name,
    });
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

export const loginUser = ({ email, password }) => (dispatch, getState) => {
  try {
    const user = auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

export const logoutUser = (param) => async (dispatch, getState) => {
  dispatch({ type: types.USER_SIGNOUT, payload: {} });
};
