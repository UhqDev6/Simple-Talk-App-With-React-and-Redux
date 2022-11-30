import { ActionType } from "../../utils/ActionType";
import api from "../../utils/api";

const setIsPreloadActionCreator = (isPreload) => {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
};

const asyncPreloadProcess = () => {
  return async (dispatch) => {
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setIsPreloadActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setIsPreloadActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
};

export { setIsPreloadActionCreator, asyncPreloadProcess };
