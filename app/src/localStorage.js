/* global localStorage */
import moment from 'moment';

export const setToken = tokenObj => {
	localStorage.setItem('access_token', tokenObj.token);
	localStorage.setItem('token_expires', moment().add(tokenObj.expires_in, 's'));
};
export const clearToken = () => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('token_expires');
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const getExpireDate = () => localStorage.getItem('token_expires');