import {api} from './api'


export const getUser = async (data) => {
    const res =  await api.get('/user', data)
    console.log('getuser', res)
    return {name:"roman", ln:"kameniev"}
}