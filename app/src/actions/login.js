import * as localStorageTokens from '../localStorage'
import { setViewer } from './viewer'
import { setAuthenticated } from './authentificated'

const login = (data) => (dispatch) => {
    console.log('data in login action', data)
    localStorageTokens.setToken(data)

	dispatch(setViewer(data.user))
	dispatch(setAuthenticated(!!data.token))
}

export default login
