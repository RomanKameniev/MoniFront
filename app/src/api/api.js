import axios from 'axios'
// import moment from 'moment'

import * as localStorageTokens from '../localStorage'
const baseURL = `https://api.moni.wtf`
// const baseURL = 'http://localhost:80'

// export const api = axios.create({ baseURL, headers: { Accept: 'application/json' } })
export const api = axios.create({ baseURL, headers: { Accept: 'application/json' } })

api.interceptors.request.use(
	(config) => {
		const token = localStorageTokens.getAccessToken()

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

// let retry = false

api.interceptors.response.use(
	(response) => {
		// const now = moment(Date.now())
		// const expireDate = moment(localStorageTokens.getExpireDate())

		// const diff = expireDate.diff(now, 'minutes')

		// if (diff < 10 && !retry) {
		// 	retry = true

		// 	const token = localStorageTokens.getRefreshToken()
		// 	refreshToken(token).then((res) => {
		// 		localStorageTokens.setToken(res.data)
		// 	})
		// } else {
		// 	retry = false
		// }

		return response
	},
	(error) => {
		if (error.response && error.response.status === 401 && localStorageTokens.getAccessToken()) {
			localStorageTokens.clearToken()
			window.location.href = '/'
		}

		return Promise.reject(error)
	}
)
// export const refreshToken = (refresh_token) => api.post('refresh', { refresh_token }) // eslint-disable-line camelcase

// export default axios
