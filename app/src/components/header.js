import React, { useEffect, useState } from 'react'
import Box from '../ui/Box'
import Logo from '../ui/assets/logo.svg'
import { useSelector} from 'react-redux'
import * as selectors from '../selectors'
import HeaderNav from './headerNav'
import useNavigate from '../hooks/useNavigate'
import HeaderAuth from './headerAuth'

const Header = () => {
	const [auth, setAuth] = useState(false)
	const navigate = useNavigate()
	const viewer = useSelector(selectors.viewer)

	const onLogoClick = () => {
		navigate('/')
	}
	useEffect(() => {
		console.log('viewer', viewer)
		if (viewer && viewer.email) {
			setAuth(true)
		} else {
			setAuth(false)
		}
	}, [viewer])
	return (
		<Box bc="#333" h="120px">
			<Box className="image-logo" display="block" max-height="75px" max-width="200px" margin="15px" bc="inherit">
				<img onClick={onLogoClick} src={Logo} style={{ padding: 5 }} alt="logo" />
			</Box>
			<Box bc="inherit">{!auth ? <HeaderNav /> : <HeaderAuth {...viewer} />}</Box>
		</Box>
	)
}

export default Header
