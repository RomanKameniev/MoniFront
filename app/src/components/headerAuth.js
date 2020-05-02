import React from 'react'
import Box from '../ui/Box'
import StyledText from '../ui/StyledText'
import useNavigate from '../hooks/useNavigate'

const HeaderAuth = (user) => {
    console.log('user', user)
	const navigate = useNavigate()
	const toProfilePage = () => navigate('/profile')

	return (
		<Box justifyContent="flex-end" alignItems="center" bc="inherit" paddingRight="20px">
			<StyledText className="login-button" onClick={toProfilePage} fontSize="25px" fontStyle="bold">
				{`Hello, ${user.login}`} 
			</StyledText>
		</Box>
	)
}

export default HeaderAuth
