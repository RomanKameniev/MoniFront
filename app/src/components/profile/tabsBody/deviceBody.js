import React, { useState } from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getDevices, removeDeviceById, addUserToDevice } from '../../../api/devices'
import useAsync from '../../../hooks/useAsync'
import { errorsNotifHandler, successNotifHandler } from '../../../utils/notifHendler'
import Devider from '../../../ui/Devider'
import Add from '../../../ui/assets/add.svg'
import Bin from '../../../ui/assets/bin.svg'
import Edit from '../../../ui/assets/edit.svg'
import UserBody from '../userBody'
import ReactModal from 'react-modal'

const DeviceBody = () => {
	console.log('in devices')
	const { result: owned, isLoading, error, refetch } = useAsync(getDevices, {}, true)

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
								return <DeviceCell key={key} {...i} refetch={refetch} />
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

const customStyles = {
	content: {
		marginTop: '25em',
		left: '50%',
		right: 'auto',
		width: '30em',
		height: '30em',
		// top: '50%',
		// width:"30%",
		// left: '50%',
		// right: 'auto',
		// bottom: 'auto',
		// marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

const DeviceCell = ({ deviceId, type, name, refetch }) => {
	const [addUser, setAddUser] = useState(false)

	const removeDevice = async () => {
		try {
			const res = await removeDeviceById(deviceId)
			successNotifHandler(res)
		} catch (e) {
			errorsNotifHandler(e)
		} finally {
			refetch()
		}
	}

	const setOpenAddUser = () => setAddUser(true)

	const onCloseModal = () => {
		setAddUser(false)
	}

	const _onAddUserToDevice = async () => {
		const email = document.getElementById('email').value
		const userId = document.getElementById('userId').value
		console.log('add user', email)
		try {
			const res = await addUserToDevice({ email, userId })
			successNotifHandler(res)
		} catch (e) {
			errorsNotifHandler(e)
		} finally {
			onCloseModal()
		}
	}

	return (
		<>
			<ReactModal isOpen={addUser} onRequestClose={onCloseModal} style={customStyles} contentLabel={'Add User'}>
				<UserBody addToDevice={_onAddUserToDevice} closeModal={onCloseModal} />
			</ReactModal>
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
						<img onClick={setOpenAddUser} src={Add} style={{ width: '25px' }} alt="Add new user" />
					</Box>{' '}
					<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
						<img onClick={removeDevice} src={Bin} style={{ width: '25px' }} alt="remove itme" />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default DeviceBody
