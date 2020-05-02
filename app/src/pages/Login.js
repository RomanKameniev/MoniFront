import React /*, {  useEffect, useState }*/ from 'react'
import Box from '../ui/Box'
import Input from '../ui/Input'
import StyledText from '../ui/StyledText'
import Button from '../ui/Button'
import useNavigate from '../hooks/useNavigate'
import { login } from '../api/auth'
import { errorsNotifHandler, successNotifHandler } from '../utils/notifHendler'

const Login = () => {
	const navigate = useNavigate()
	const toRegistration = () => navigate('/registration')
	const onSubmit = async () => {
		let email = document.getElementById('email').value
		let password = document.getElementById('password').value
		console.log('email, pass', email, password)
		try {
			const res = await login({ email, password })
			successNotifHandler(res)
		} catch (e) {
			console.log('e', e)
			errorsNotifHandler(e)
		}
		finally{
			console.log('login => done')
		}
		// if(!email)
	}

	return (
		<Box h="800px" justifyContent="center">
			<Box fd="column" maxHeight="20em" maxWidth="400px" bc="#333" margin="10px" marginTop="30px" borderRadius="15px">
				<StyledText alignSelf="center" padding="5px" fontSize="35px" fontStyle="bold" color="#ffffff">
					Login
				</StyledText>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Email</StyledText>
					<Input id="email" type="email" placeholder="email" />
				</Box>
				<Box fd="column" bc="inherit" maxHeight="60px" maxWidth="370px" padding="7px">
					<StyledText color="#FFFFFF">Password</StyledText>
					<Input id="password" type="password" placeholder="password" />
				</Box>
				<Button onClick={onSubmit} type="disabled" alignSelf="flex-end" margin="15px">
					Submit
				</Button>

				<Box bc="inherit" maxWidth="300px" maxHeight="50px" padding="15px" borderRadius="10px">
					<StyledText>Don't have account yet?</StyledText>
					<StyledText className="registration-link" color="#4d79ff" marginLeft="5px" onClick={toRegistration}>
						Registration
					</StyledText>
				</Box>
			</Box>
		</Box>
	)
}

export default Login
