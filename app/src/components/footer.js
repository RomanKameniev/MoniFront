import React from 'react'
import Box from '../ui/Box'
import useNavigate from '../hooks/useNavigate'
import Logo from '../ui/assets/logo.svg'
import Download from '../ui/assets/download.png'
import { setLang } from '../languages/index'

const Footer = () => {
	const navigate = useNavigate()

	const onLogoClick = () => {
		navigate('/')
	}
	return (
		<Box bc="#051b6b" h="200px" justifyContent="space-evently">
			<Box max-height="75px" bc="inherit" paddingTop="20px" justifyContent="flex-start">
				<img onClick={onLogoClick} src={Logo} style={{ padding: 5 }} alt="logo" />
			</Box>
			<Box max-height="75px" alignItems="center" bc="inherit" justifyContent="flex-end">
				<select style={{width:"50px", height:"40px"}} onChange={(v) => setLang(v.target.value)}>
					<option value="uk">UK</option>
					<option value="en">EN</option>
				</select>
				{/* <img onClick={onLogoClick} width="200px" height="150px" src={Download} style={{ padding: 5, paddingTop:20, paddingLeft:0, marginRight:40 }} alt="download" /> */}
			</Box>
			<Box max-height="75px" bc="inherit" justifyContent="flex-end">
				<img onClick={onLogoClick} width="200px" height="150px" src={Download} style={{ padding: 5, paddingTop: 20, paddingLeft: 0, marginRight: 40 }} alt="download" />
			</Box>
		</Box>
	)
}

export default Footer
