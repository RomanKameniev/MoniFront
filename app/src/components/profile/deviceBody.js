import React from 'react'
import Box from '../../ui/Box'
import StyledText from '../../ui/StyledText'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { addDevice } from '../../api/devices'
import { successNotifHandler, errorsNotifHandler } from '../../utils/notifHendler'

const DeviceBody = ({ closeModal }) => {
	const onSubmitDevice = async () => {
		const name = document.getElementById('deviceName').value
		const type = document.getElementById('deviceType').value
		const deviceId = document.getElementById('deviceId').value

		try {
			if (name && type && deviceId) {
				const res = await addDevice({ name, type, deviceId })
				successNotifHandler(res)
			}
		} catch (e) {
			errorsNotifHandler(e)
		} finally {
			closeModal()
		}
	}

	return (
		<Box maxHeight="20em" bc="inherit" maxWidth="30em" fd="column" alignItems="center">
			<StyledText fontStyle="bold" fontSize="30px">
				Add Device
			</StyledText>
			<Box fd="column" bc="inherit">
				<StyledText>Device Name: </StyledText>
				<Input id="deviceName" type="text" />
			</Box>
			<Box fd="column" bc="inherit">
				<StyledText>Device Id: </StyledText>
				<Input id="deviceId" type="text" />
			</Box>
			<Box fd="column" bc="inherit">
				<StyledText>Device Type: </StyledText>
				<Input id="deviceType" type="text" />
			</Box>
			<Button onClick={onSubmitDevice}>Submit</Button>
		</Box>
	)
}

export default DeviceBody
