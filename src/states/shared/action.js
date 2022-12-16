import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveTalkActionCreator } from '../talks/action';
import { receiveUserActionCreator } from '../users/action';

const asyncPopulateUserAndTalks = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const users = await api.getAllUsers();
    const talks = await api.getAllTalks();
    dispatch(receiveUserActionCreator(users));
    dispatch(receiveTalkActionCreator(talks));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export { asyncPopulateUserAndTalks };
