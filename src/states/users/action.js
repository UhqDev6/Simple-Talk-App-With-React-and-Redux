import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../utils/ActionType';
import api from '../../utils/api';

const receiveUserActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({ id, name, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.register({ id, name, password });
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export { receiveUserActionCreator, asyncRegisterUser };
