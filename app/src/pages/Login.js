import React /*, {  useEffect, useState }*/ from 'react'
import Box from '../ui/Box'
import Input from '../ui/Input'
import StyledText from '../ui/StyledText'
import Button from '../ui/Button'
import useNavigate from '../hooks/useNavigate'
import useSignIn from '../hooks/useSignIn'
import { loginWithEmail } from '../api/auth'
// import GoogleLogin from 'react-google-login'
import { errorsNotifHandler, successNotifHandler } from '../utils/notifHendler'
import { useGoogleLogin } from 'react-google-login'
import GoogleLogin from 'react-google-login'

const CLIENT_ID = '289348243186-u0aorgm24u2tkatcklaqgsfsi92702l3.apps.googleusercontent.com'
//'289348243186-u0aorgm24u2tkatcklaqgsfsi92702l3.apps.googleusercontent.com'
// const CLIENT_ID = "289348243186-dh960gtt0ap1avkvh330n3fdkh03dnh2.apps.googleusercontent.com" //prod

const Login = () => {
	const navigate = useNavigate()
	const signIn = useSignIn()

	const toRegistration = () => navigate('/registration')
	const onSubmit = async () => {
		let email = document.getElementById('email').value
		let password = document.getElementById('password').value
		console.log('email, pass', email, password)
		try {
			const res = await loginWithEmail({ email, password })
			console.log('res', res)
			successNotifHandler(res)
			signIn(res.data)
		} catch (e) {
			console.log('e', e)
			errorsNotifHandler(e)
		} finally {
			console.log('login => done')
		}
		// if(!email)
	}
	const responseGoogle = (response) => {
		console.log('try query')
		console.log(response)
	}

	const login = (response) => {
		console.log('response', response)
	}
	const handleLoginFailure = (response) => {
		alert('Failed to log in')
	}

	return (
		<Box h="900px" justifyContent="center">
			<Box fd="column" maxHeight="22em" maxWidth="400px" bc="#333" margin="10px" marginTop="30px" borderRadius="15px">
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
				<GoogleLogin clientId={CLIENT_ID} buttonText="Login" onSuccess={login} onFailure={handleLoginFailure} cookiePolicy={'single_host_origin'} responseType="code,token" />
				{/* 
				<GoogleLogin
					className="google-auth"
					clientId="289348243186-u0aorgm24u2tkatcklaqgsfsi92702l3.apps.googleusercontent.com"
					//public		clientId="289348243186-dh960gtt0ap1avkvh330n3fdkh03dnh2.apps.googleusercontent.com"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				>
					Login with google
				</GoogleLogin> */}

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
