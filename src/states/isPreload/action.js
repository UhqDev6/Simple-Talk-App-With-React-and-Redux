import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../utils/ActionType';
import api from '../../utils/api';

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setIsPreloadActionCreator(authUser));
  } catch (error) {
    dispatch(setIsPreloadActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
