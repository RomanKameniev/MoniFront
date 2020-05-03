import React from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getDevices } from '../../../api/devices'
import useAsync from '../../../hooks/useAsync'
import { errorsNotifHandler } from '../../../utils/notifHendler'
import Devider from '../../../ui/Devider'

const DeviceBody = () => {
	console.log('in devices')
	const { result: owned, isLoading, error } = useAsync(getDevices, {}, true)

	if (error) errorsNotifHandler(error)
	if (isLoading || error) return <StyledText>Loading...</StyledText>
	console.log('result', owned)

	return (
		<Box maxWidth="100%" fd="row" bc="inherit" wrap justifyContent="space-around">
			<Box maxWidth="30em" bc="inherit" fd="column">
				<Box bc="#eee" justifyContent="center" borderRadius="10px" marginBottom="5px">
					<StyledText alignSelf="center">Owned</StyledText>
				</Box>

				{owned ? (
					<Box bc="#eee" fd="column">
						<Box maxWidth="30em" bc="inherit" justifyContent="space-around">
							<StyledText width="10em" margin="5px">
								Name:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Type:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Id:
							</StyledText>
						</Box>
						<Devider />
						<Box maxWidth="30em" fd="column" bc="inherit" alignItems="flex-start">
							{owned.map((i, key) => {
								return <DeviceCell key={key} {...i} />
							})}
						</Box>
					</Box>
				) : (
					<StyledText>No owned products</StyledText>
				)}
			</Box>
			<Box maxWidth="30em" bc="inherit" fd="column">
				<StyledText alignSelf="center">Used</StyledText>
				{false ? (
					<Box fd="column" bc="inherit" itemsAlign="flex-start">
						<Box maxWidth="30em" bc="inherit" justifyContent="space-around">
							<StyledText margin="5px">Name:</StyledText>
							<StyledText margin="5px">Type:</StyledText>
							<StyledText margin="5px"> Id:</StyledText>
						</Box>
						<Box maxWidth="30em" fd="column" bc="inherit">
							{owned.map((i, key) => {
								return <DeviceCell key={key} {...i} />
							})}
						</Box>
					</Box>
				) : (
					<StyledText>No owned products</StyledText>
				)}
			</Box>
		</Box>
	)
}

const DeviceCell = ({ deviceId, type, name }) => {
	return (
		<Box maxWidth="30em" justifyContent="flex-start" bc="inherit" textAlign="left">
			<StyledText margin="5px" width="10em" textAlign="left">
				{name}
			</StyledText>
			<StyledText margin="5px" width="10em" textAlign="left">
				{type}
			</StyledText>
			<StyledText margin="5px" width="10em" textAlign="left">
				{deviceId}
			</StyledText>
		</Box>
	)
}

export default DeviceBody
