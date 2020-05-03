import { useDispatch } from 'react-redux';
import logout from '../actions/logout';
import useNavigate from './useNavigate';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    dispatch(logout);
    navigate('/login');
  };
};

export default useLogout;
