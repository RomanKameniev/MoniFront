import { useDispatch } from 'react-redux'
import login from '../actions/login'
import useNavigate from './useNavigate'

const useSignIn = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const signIn = (data) => {
		const signInAction = login(data)
		dispatch(signInAction)
		navigate('/')
	}

	return signIn
}

export default useSignIn
