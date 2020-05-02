import React, { Fragment } from 'react'
import './App.css'
import 'react-notifications/lib/notifications.css';
import Header from './components/header'
import Footer from './components/footer'
import Router from './Router'
import { NotificationContainer } from 'react-notifications'

const App = () => {
	return (
		<Fragment>
			<Header />
			<NotificationContainer />
			<Router />
			<Footer />
		</Fragment>
		// <Box h="100%">
		// 	<Box bc="red">hello</Box>
		// 	<Box>hello</Box>
		// 	<Box bc="red">hello</Box>
		// </Box>
	)
}

export default App
