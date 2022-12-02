import { ActionType } from '../../utils/ActionType';
import api from '../../utils/api';

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setIsPreloadActionCreator(authUser));
  } catch (error) {
    dispatch(setIsPreloadActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }
};

export {
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
