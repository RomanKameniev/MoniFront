import React from 'react'
import Box from '../ui/Box'
import { UserLayout, ActionButtons, Tabs } from '../components/profile/index'
import { useSelector } from 'react-redux'
import * as selectors from '../selectors'

const Profile = () => {
	const user = useSelector(selectors.viewer)

	return (
		<Box fd="column" justifyContent="flex-start" alignItems="center">
			<Box h="25em" w="100%" fd="column" alignItems="center" padding="2em" wrap>
				<UserLayout {...user} />
				<ActionButtons />
			</Box>

			<Box minHeight="20em" w="80%" bc="inherit">
				<Tabs />
			</Box>
		</Box>
	)
}

export default Profile
