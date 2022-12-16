import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../utils/ActionType';
import api from '../../utils/api';

const receiveTalkActionCreator = (talks) => ({
  type: ActionType.RECEIVE_TALKS,
  payload: {
    talks,
  },
});

const addTalkActionCreator = (talk) => ({
  type: ActionType.ADD_TALK,
  payload: {
    talk,
  },
});

const toggleLikeTalkActionCreator = ({ talkId, userId }) => ({
  type: ActionType.TOGGLE_LIKE_TALK,
  payload: {
    talkId,
    userId,
  },
});

const asyncAddTalk = ({ text, replyTo = '' }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const talk = await api.createTalk({ text, replyTo });
    dispatch(addTalkActionCreator(talk));
  } catch (error) {
    alert(error.massage);
  }
  dispatch(hideLoading());
};

const asyncToggleLikeTalk = (talkId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
  try {
    await api.toggleLikeTalk(talkId);
  } catch (error) {
    alert(error.massage);
    dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
  }
  dispatch(hideLoading());
};

export {
  receiveTalkActionCreator,
  addTalkActionCreator,
  toggleLikeTalkActionCreator,
  asyncAddTalk,
  asyncToggleLikeTalk,
};
