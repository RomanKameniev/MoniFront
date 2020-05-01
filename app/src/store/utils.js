/* global localStorage */

export const getPreventedStore = () => {
	const token = localStorage.getItem('access_token');

	if (token) {
		return { authenticated: true };
	}

	return { authenticated: false };
};
