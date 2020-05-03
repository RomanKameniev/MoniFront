/* eslint-disable */

import { useState, useCallback, useEffect, useRef } from 'react'

const useAsync = (fn, args, fetchInitial) => {
	const [state, setState] = useState({
		isLoading: fetchInitial,
	})

	const shouldFetch = useRef(fetchInitial)

	const argsString = JSON.stringify(args)

	const refetch = useCallback(
		(params = args) => {
			let mounted = true
			setState({
				isLoading: true,
			})
			const promise = fn(params)

			promise.then(
				(result) => {
					if (mounted) {
						setState({
							isLoading: false,
							result,
							error: null,
						})
					}
				},
				(error) => {
					if (mounted) {
						setState({
							isLoading: false,
							error,
							result: null,
						})
					}
				}
			)

			return () => {
				mounted = false
			}
		},
		[argsString]
	)

	useEffect(() => {
		if (!shouldFetch.current) {
			shouldFetch.current = true
			return
		}
		return refetch(args)
	}, [argsString])

	return { ...state, refetch }
}

export default useAsync
