import {api} from './api'


export const addDevice = async ({deviceId, name, type}) =>{
    const res = await api.post("/device", {deviceId, name, type})
    return res
}
export const getDevices = async () =>{
    console.log('getDevices')
    const res = await api.get("/devices")
    return res.data.data
}

