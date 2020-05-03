import React from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getDevices } from '../../../api/devices'
import useAsync from '../../../hooks/useAsync'
import { errorsNotifHandler } from '../../../utils/notifHendler'
import Devider from '../../../ui/Devider'
import Add from '../../../ui/assets/add.svg'
import Bin from '../../../ui/assets/bin.svg'
import Edit from '../../../ui/assets/edit.svg'

const DeviceBody = () => {
	console.log('in devices')
	const { result: owned, isLoading, error } = useAsync(getDevices, {}, true)

	if (error) errorsNotifHandler(error)
	if (isLoading || error) return <StyledText>Loading...</StyledText>
	console.log('result', owned)

	return (
		<Box maxWidth="100%" fd="row" bc="inherit" wrap justifyContent="space-around">
			<Box maxWidth="40em" bc="inherit" fd="column">
				<Box bc="#eee" justifyContent="center" borderRadius="10px" marginBottom="5px">
					<StyledText alignSelf="center">Owned</StyledText>
				</Box>

				{owned ? (
					<Box bc="#eee" fd="column">
						<Box maxWidth="40em" bc="inherit" justifyContent="space-around">
							<StyledText width="10em" margin="5px">
								Name:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Type:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Id:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Actions:
							</StyledText>
						</Box>
						<Devider />
						<Box maxWidth="40em" fd="column" bc="inherit" alignItems="flex-start">
							{owned.map((i, key) => {
								return <DeviceCell key={key} {...i} />
							})}
						</Box>
					</Box>
				) : (
					<StyledText>No owned products</StyledText>
				)}
			</Box>
			<Box maxWidth="40em" bc="inherit" fd="column">
				<StyledText alignSelf="center">Used</StyledText>
				{false ? (
					<Box fd="column" bc="inherit" itemsAlign="flex-start">
						<Box maxWidth="40em" bc="inherit" justifyContent="space-around">
							<StyledText margin="5px">Name:</StyledText>
							<StyledText margin="5px">Type:</StyledText>
							<StyledText margin="5px"> Id:</StyledText>
						</Box>
						<Box maxWidth="40em" fd="column" bc="inherit">
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
		<Box maxWidth="40em" justifyContent="flex-start" bc="inherit" textAlign="left">
			<StyledText margin="5px" width="10em" textAlign="left">
				{name}
			</StyledText>
			<StyledText margin="5px" width="10em" textAlign="left">
				{type}
			</StyledText>
			<StyledText margin="5px" width="10em" textAlign="left">
				{deviceId}
			</StyledText>
			<Box margin="5px" width="10em" alignItems="center" bc="inherit">
				<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
					<img onClick={() => console.log('edit')} src={Edit} style={{ width: '25px' }} alt="edit" />
				</Box>
				<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
					<img onClick={() => console.log('edit')} src={Add} style={{ width: '25px' }} alt="Add new user" />
				</Box>{' '}
				<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
					<img onClick={() => console.log('edit')} src={Bin} style={{ width: '25px' }} alt="remove itme" />
				</Box>
			</Box>
		</Box>
	)
}

export default DeviceBody
