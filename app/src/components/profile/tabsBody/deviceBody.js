import React from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getDevices } from '../../../api/devices'
import useAsync from '../../../hooks/useAsync'
import { errorsNotifHandler } from '../../../utils/notifHendler'

const DeviceBody = () => {
	console.log('in devices')
	const { result, isLoading, error } = useAsync(getDevices, {}, true)

	if (error) errorsNotifHandler(error)
	if (isLoading || error) return <StyledText>Loading...</StyledText>
	console.log('result', result)

	return (
		<Box fd="column">
			<StyledText alignSelf="center">Owned</StyledText>
			{result ? (
				<Box fd="column">
					<Box width="30em" justifyContent="flex-start">
						<StyledText margin="5px">Name:</StyledText>
						<StyledText margin="5px">Type:</StyledText>
						<StyledText margin="5px"> Id:</StyledText>
					</Box>
					<Box fd="column">
						{result.map((i, key) => {
							return <DeviceCell key={key} {...i} />
						})}
					</Box>
				</Box>
			) : (
				<StyledText>No owned products</StyledText>
			)}
		</Box>
	)
}

const DeviceCell = ({ deviceId, type, name }) => {
	return (
		<Box justifyContent="flex-start">
			<StyledText margin="5px">{name}</StyledText>
			<StyledText margin="5px">{type}</StyledText>
			<StyledText margin="5px">{deviceId}</StyledText>
		</Box>
	)
}

export default DeviceBody
