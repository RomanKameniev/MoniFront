import React from 'react'
import Box from '../ui/Box'
import StyledText from '../ui/StyledText'
import useNavigate from '../hooks/useNavigate'

const HeaderNav = () => {
	const navigate = useNavigate()
	const toLoginPage = () => navigate('/login')

	return (
		<Box justifyContent="flex-end" alignItems="center" bc="inherit" paddingRight="20px">
			<StyledText onClick={toLoginPage} className="login-button" fontSize="25px" fontStyle="bold">
				Login
			</StyledText>
		</Box>
	)
}

export default HeaderNav
