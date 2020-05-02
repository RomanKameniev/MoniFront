import {api} from './api'


export const getUser = async () => {
    const res =  await api.get('/user')
    console.log('getuser', res)
    return res.data
}