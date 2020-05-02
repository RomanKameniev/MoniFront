import React, { createRef, useEffect, useState } from 'react'
import Box from '../ui/Box'
import Input from '../ui/Input'
import StyledText from '../ui/StyledText'
import Button from '../ui/Button'
import useNavigate from '../hooks/useNavigate'

const Registration = () => {
	const navigate = useNavigate()
	const toLogin = () => navigate('/login')
	const onSubmit = () => {
		let email = document.getElementById('email').value
		let p1 = document.getElementById('p1').value
		let p2 = document.getElementById('p2').value
		let login = document.getElementById('login').value
		console.log('email', email, p1, p2, login)
	}
	return (
		<Box h="800px" justifyContent="center">
			<Box fd="column" bc="inherit" maxHeight="30em" maxWidth="400px" bc="#333" margin="10px" marginTop="30px" borderRadius="15px">
				<StyledText alignSelf="center" padding="5px" fontSize="35px" fontStyle="bold" color="#ffffff">
					Registration
				</StyledText>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Email</StyledText>
					<Input id="email" type="email" placeholder="email" />
				</Box>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Login</StyledText>
					<Input id="login" type="text" placeholder="login" />
				</Box>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Password</StyledText>
					<Input id="p1" type="password" placeholder="password" />
				</Box>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Password</StyledText>
					<Input id="p2" type="password" placeholder="password" />
				</Box>
				<Button onClick={onSubmit} type="disabled" alignSelf="flex-end" margin="15px">
					Submit
				</Button>

				<Box bc="inherit" maxWidth="300px" maxHeight="50px" padding="15px" borderRadius="10px">
					<StyledText>Already have account?</StyledText>
					<StyledText className="registration-link" color="#4d79ff" onClick={toLogin} marginLeft="5px">
						Login
					</StyledText>
				</Box>
			</Box>
		</Box>
	)
}

export default Registration
