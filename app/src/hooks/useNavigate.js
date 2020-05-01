import { useHistory } from 'react-router-dom'

const useNavigate = () => {
	const { push } = useHistory()

	return push
}

export default useNavigate
