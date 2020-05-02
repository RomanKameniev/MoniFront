import React from 'react'
import Box from '../../ui/Box'
import Button from '../../ui/Button'
import StyledText from '../../ui/StyledText'

const ActionButtons = () => {
	return (
		<Box maxHeight="10em" fd="column" padding="5px">
			<StyledText fontSize="30px" fontStyle="bold">
				Available actions:
			</StyledText>
			<Button>Add Device</Button>
			<Button>Add User</Button>
			<Button>Pay</Button>
			<Button>Split Bill</Button>
		</Box>
	)
}

export default ActionButtons
