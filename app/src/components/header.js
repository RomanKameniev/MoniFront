import React from 'react'
import Box from '../ui/Box'
import Logo from '../ui/assets/logo.svg'
import HeaderNav from './headerNav'
import useNavigate from '../hooks/useNavigate'

const Header = () => {
	const navigate = useNavigate()

	const onLogoClick = () => {
		navigate('/')
	}
	return (
		<Box bc="#333" h="120px">
			<Box  display="block" max-height="75px" max-width="200px" margin="15px" bc="inherit">
				<img onClick={onLogoClick} src={Logo} style={{ padding: 5 }} />
			</Box>
			<Box bc="inherit">
				<HeaderNav />
			</Box>
		</Box>
	)
}

export default Header
