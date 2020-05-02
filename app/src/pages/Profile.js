import React from 'react'
import Box from '../ui/Box'
import { UserLayout, ActionButtons, Tabs } from '../components/profile/index'
import { useSelector } from 'react-redux'
import * as selectors from '../selectors'

const Profile = () => {
	const user = useSelector(selectors.viewer)

	return (
		<Box fd="column" alignItems="center">
			<Box h="15em" w="80%" padding="2em" wrap>
				<UserLayout {...user} />
				<ActionButtons />
			</Box>

			<Box minHeight="20em" w="80%" bc="inherit" padding="2em">
				<Tabs />
			</Box>
		</Box>
	)
}

export default Profile
