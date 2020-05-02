import * as localStorageTokens from '@dezigned/utils/localStorageTokens'
import { resetViewer } from './viewer'
import { resetAuthenticated } from './authenticated'

export default logout = (dispatch) => {
	localStorageTokens.clearToken()

	dispatch(resetViewer)
	dispatch(resetAuthenticated)
}
