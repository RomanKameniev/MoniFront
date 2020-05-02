import { api } from './api'

export const registration = async (data) => {
	const res = await api.post('/registration', data)
	console.log('registration', res)
	return res
}

export const login = async (data) => {
	console.log('data login', data)
	const res = await api.post('/login', data)
	console.log('login response', res)
	return res
}
