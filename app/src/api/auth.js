import { api } from './api'

export const registration = async (data) => {
	// console.log("in registration", api)
	// let tempData = {
	// 	login:"temp",
	// 	email:"roman.kameniev@gmail.com",
	// 	password:"1324"
	// }
	const res = await api.post('/registration', data)
	console.log('registration', res)
	return res
}
