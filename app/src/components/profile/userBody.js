import React from 'react'
import Box from '../../ui/Box'
import StyledText from '../../ui/StyledText'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { addUserToContacts } from '../../api/user'
import { successNotifHandler, errorsNotifHandler } from '../../utils/notifHendler'

const UserBody = ({ closeModal }) => {
	const onSubmitUser = async () => {
		const email = document.getElementById('email').value
		const userId = document.getElementById('userId').value

		try {
			const res = await addUserToContacts({ email, userId })
			successNotifHandler(res)
		} catch (e) {
			errorsNotifHandler(e)
		} finally {
			closeModal()
		}
	}

	return (
		<Box maxHeight="20em" bc="inherit" maxWidth="30em" fd="column" alignItems="center">
			<StyledText fontStyle="bold" fontSize="30px">
				Add Contact
			</StyledText>
			<Box fd="column" bc="inherit">
				<StyledText>Email</StyledText>
				<Input id="email" type="email" />
			</Box>
			<StyledText>OR</StyledText>
			<Box fd="column" bc="inherit">
				<StyledText>User Id: </StyledText>
				<Input id="userId" type="text" />
			</Box>
			<Button onClick={onSubmitUser}>Submit</Button>
		</Box>
	)
}

export default UserBody
