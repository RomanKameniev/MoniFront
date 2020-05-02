import { api } from './api'

export const registration = async (data) => {
    console.log("in registration")
	const res = await api.post('/registration', data)
	console.log('registration', res)
	return res
}
