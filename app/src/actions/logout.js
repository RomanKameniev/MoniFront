import * as localStorageTokens from '../localStorage'
import { resetViewer } from './viewer'
import { resetAuthenticated } from './authentificated'

const logout = (dispatch) => {
	localStorageTokens.clearToken()

	dispatch(resetViewer)
	dispatch(resetAuthenticated)
}
export default logout
