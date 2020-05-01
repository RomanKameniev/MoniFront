import React, { Fragment } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Router from './Router'

const App = () => {
	return (
		<Fragment>
			<Header />
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
