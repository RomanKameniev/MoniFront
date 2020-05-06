import React, { Fragment } from 'react'
import './App.css'
import 'react-notifications/lib/notifications.css';
import 'react-tabs/style/react-tabs.css';
import 'react-credit-cards/es/styles-compiled.css';
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
	)
}

export default App
