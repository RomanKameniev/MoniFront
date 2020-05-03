import { api } from './api'

export const getUser = async () => {
	const res = await api.get('/user')
	console.log('getuser', res)
	return res.data
}

export const addUserToContacts = async ({ email, userId }) => {
	const data = email ? { email } : { userId }
	const res = await api.post('/user', data)
	return res
}

export const getUserContacts = async () => {
	const res = await api.get('/contacts')
	return res.data.data
}
