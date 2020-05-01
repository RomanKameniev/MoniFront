import React from 'react'
import Box from '../ui/Box'
import StyledText from '../ui/StyledText'

const HeaderNav = () => {
	return (
		<Box justifyContent="flex-end" alignItems="center" bc="inherit" paddingRight="20px">
			<StyledText className="login-button" fontSize="25px" fontStyle="bold">
				Login
			</StyledText>
		</Box>
	)
}

export default HeaderNav
