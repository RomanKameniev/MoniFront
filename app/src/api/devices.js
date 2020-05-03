import { api } from './api'

export const addDevice = async ({ deviceId, name, type }) => {
	const res = await api.post('/device', { deviceId, name, type })
	return res
}
export const getDevices = async () => {
	console.log('getDevices')
	const res = await api.get('/devices')
	return res.data.data
}

export const removeDeviceById = async (deviceId) => {
	console.log('deviceId', deviceId)
	const res = await api.delete('/device', { data: { deviceId } })
	return res
}
