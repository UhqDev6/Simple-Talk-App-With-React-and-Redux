import api from '../../utils/api';
import { receiveTalkActionCreator } from '../talks/action';
import { receiveUserActionCreator } from '../users/action';

const asyncPopulateUserAndTalks = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const talks = await api.getAllTalks();
    dispatch(receiveUserActionCreator(users));
    dispatch(receiveTalkActionCreator(talks));
  } catch (error) {
    alert(error.message);
  }
};

export { asyncPopulateUserAndTalks };
