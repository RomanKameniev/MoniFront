import React from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getUserContacts } from '../../../api/user'
import useAsync from '../../../hooks/useAsync'
import { errorsNotifHandler } from '../../../utils/notifHendler'

const UsersBody = () => {
	console.log('in devices')
	const { result, isLoading, error } = useAsync(getUserContacts, {}, true)

	if (error) errorsNotifHandler(error)
	if (isLoading || error) return <StyledText>Loading...</StyledText>
	console.log('result', result)

	return (
		<Box fd="column">
			<StyledText alignSelf="center">Owned</StyledText>
			{result ? (
				<Box fd="column">
					<Box width="30em" justifyContent="flex-start">
						<StyledText margin="5px">Login:</StyledText>
						<StyledText margin="5px">email:</StyledText>
					</Box>
					<Box fd="column">
						{result.map((i, key) => {
							return <UserCell key={key} {...i} />
						})}
					</Box>
				</Box>
			) : (
				<StyledText>No owned products</StyledText>
			)}
		</Box>
	)
}

const UserCell = ({ login, email }) => {
	return (
		<Box justifyContent="flex-start">
			<StyledText margin="5px">{login}</StyledText>
			<StyledText margin="5px">{email}</StyledText>
			{/* <StyledText margin="5px">{deviceId}</StyledText> */}
		</Box>
	)
}

export default UsersBody
