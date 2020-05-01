/* global localStorage */
import moment from 'moment';

export const setToken = tokenObj => {
	localStorage.setItem('access_token', tokenObj.access_token);
	localStorage.setItem('refresh_token', tokenObj.refresh_token);
	localStorage.setItem('token_expires', moment().add(tokenObj.expires_in, 's'));
};
export const clearToken = () => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
	localStorage.removeItem('token_expires');
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
export const getExpireDate = () => localStorage.getItem('token_expires');