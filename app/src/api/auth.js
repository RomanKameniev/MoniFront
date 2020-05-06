import { api } from './api'

export const registration = async (data) => {
	const res = await api.post('/registration', data)
	console.log('registration response', res)
	return res
}

export const loginWithEmail = async (data) => {
	const res = await api.post('/login', data)
	console.log('login response', res)
	return res
}
export const logout = async () => {
	const res = await api.post('/logout')
	console.log('logout response', res)
	return res
}
