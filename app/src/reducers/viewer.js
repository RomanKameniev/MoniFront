import produce from 'immer'
import { VIEWER_SET, VIEWER_RESET } from '../actions/viewer'

const initialState = null

const reducer = produce((state = initialState, action) => {
	switch (action.type) {
		case VIEWER_RESET:
			state = initialState
			break
		case VIEWER_SET:
			state = action.payload
			break
		default:
			break
	}

	return state
})

export default reducer
