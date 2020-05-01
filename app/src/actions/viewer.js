import { getUser } from 'api/user';

export const VIEWER = 'VIEWER';
export const VIEWER_SET = `${VIEWER}_SET`;
export const VIEWER_RESET = `${VIEWER}_RESET`;

export const setViewer = payload => ({
  type: VIEWER_SET,
  payload,
});

export const resetViewer = {
  type: VIEWER_RESET,
};

export const requestViewer = async dispatch => {
  const { data } = await getUser();
  const action = setViewer(data);
  dispatch(action);
};
