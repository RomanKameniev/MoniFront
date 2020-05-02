import React from 'react'
import Box from '../../ui/Box'
import NoPhoto from '../../ui/assets/nophoto.svg'
import StyledText from '../../ui/StyledText'
import Button from '../../ui/Button'

const UserLayout = ({ email, login }) => {
	const logout = () => {
		console.log('logout pressed')
	}

	return (
		<Box bc="#eee" borderRadius="10px">
			<Box className="image-my" display="block" max-height="65px" max-width="200px" margin="10px" bc="inherit">
				<img src={NoPhoto} alt="logo" />
			</Box>
			<Box fd="column" maxHeight="12em" margin="10px" justifyContent="space-between" bc="inherit">
				<Box fd="column" paddingLeft="5px" paddingTop="5px" bc="inherit">
					<StyledText>Email</StyledText>
					<StyledText>{email}</StyledText>
				</Box>
				<Box fd="column" paddingLeft="5px" bc="inherit">
					<StyledText>Login</StyledText>
					<StyledText>{login}</StyledText>
				</Box>
				<Button type="primary" className="logout-button" margin="10px" onClick={logout}>
					Logout
				</Button>
			</Box>
		</Box>
	)
}

export default UserLayout
