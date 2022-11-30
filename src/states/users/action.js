import { ActionType } from "../../utils/ActionType";
import api from "../../utils/api";

const receiveUserActionCreator = (users) => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
};

const asyncRegisterUser = ({ id, name, password }) => {
  return async () => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
};

export { receiveUserActionCreator, asyncRegisterUser };
