export const AUTHENTICATED = 'AUTHENTICATED'
export const AUTHENTICATED_SET = `${AUTHENTICATED}_SET`
export const AUTHENTICATED_RESET = `${AUTHENTICATED}_RESET`

export const setAuthenticated = (payload) => ({
	type: AUTHENTICATED_SET,
	payload,
})

export const resetAuthenticated = {
	type: AUTHENTICATED_RESET,
}
