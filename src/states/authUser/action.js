import { ActionType } from "../../utils/ActionType";
import api from "../../utils/api";

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unSetAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
};

const asyncSetAuthUser = ({ id, password }) => {
  return async (dispatch) => {
    try {
      const token = await api.login({ id, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unSetAuthUserActionCreator());
    api.putAccessToken("");
  };
};

export { setAuthUserActionCreator, unSetAuthUserActionCreator, asyncSetAuthUser, asyncUnsetAuthUser };
