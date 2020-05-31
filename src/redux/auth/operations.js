import { services } from "./../../services/services";

export const registerUser = ({ email, password, name }) => async (
  dispatch,
  getState
) => {
  services.createUser({ name, email, password });
};

export const loginUser = ({ email, password }) => (dispatch, getState) => {
  services.signInUser({ email, password });
};

export const logoutUser = () => {
  services.signOutUser();
};
