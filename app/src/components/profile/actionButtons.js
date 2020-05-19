import React, { useState } from 'react'
import Box from '../../ui/Box'
import Button from '../../ui/Button'
import StyledText from '../../ui/StyledText'
import ReactModal from 'react-modal'
import DeviceBody from './deviceBody'
import UserBody from './userBody'

const customStyles = {
	content: {
		top: '25%',
		left: '50%',
		right: 'auto',
		width: '30em',
		height: '20em',
		// top: '50%',
		// width:"30%",
		// left: '50%',
		// right: 'auto',
		// bottom: 'auto',
		// marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

const ActionButtons = () => {
	const [device, setModalDevice] = useState(false)
	const [user, setModalUser] = useState(false)

	const _onClickedDevice = () => setModalDevice(true)
	const _onClickedUser = () => setModalUser(true)
	const closeModal = () => {
		setModalDevice(false)
		setModalUser(false)
	}

	return (
		<Box height="2em" paddingTop="50px" width="100%" fd="column" alignItems="center">
			<ReactModal isOpen={device || user} onRequestClose={closeModal} style={customStyles} contentLabel={device ? 'Device' : 'User'}>
				{device && <DeviceBody closeModal={closeModal} />}
				{user && <UserBody closeModal={closeModal} />}
			</ReactModal>
			<StyledText fontSize="30px" fontStyle="bold">
				Available actions:
			</StyledText>
			<Box fd="row" justifyContent="center">
				<Button onClick={_onClickedDevice}>Add Device</Button>
				<Button onClick={_onClickedUser}>Add User</Button>
				<Button>Pay</Button>
				<Button>Split Bill</Button>
			</Box>
		</Box>
	)
}

export default ActionButtons
