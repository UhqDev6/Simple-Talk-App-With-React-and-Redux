import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../utils/ActionType';
import api from '../../utils/api';

const receiveTalkDetailActionCreator = (talkDetail) => ({
  type: ActionType.RECEIVE_TALK_DETAIL,
  payload: {
    talkDetail,
  },
});

const clearTalkDetailActionCreator = () => ({
  type: ActionType.CLEAR_TALK_DETAIL,
});

const toggleLikeTalkDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
  payload: {
    userId,
  },
});

const asyncReceiveTalkDetail = (talkId) => async (dispatch) => {
  dispatch(showLoading());
  dispatch(clearTalkDetailActionCreator());
  try {
    const talkDetail = await api.getTalkDetail(talkId);
    dispatch(receiveTalkDetailActionCreator(talkDetail));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncToggleLikeTalkDetail = () => async (dispatch, getState) => {
  const { authUser, talkDetail } = getState();
  dispatch(showLoading());
  dispatch(toggleLikeTalkDetailActionCreator(authUser.id));
  try {
    await api.toggleLikeTalk(talkDetail.id);
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export {
  receiveTalkDetailActionCreator,
  clearTalkDetailActionCreator,
  toggleLikeTalkDetailActionCreator,
  asyncReceiveTalkDetail,
  asyncToggleLikeTalkDetail,
};
