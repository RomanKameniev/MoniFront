import React, { Suspense, Fragment } from 'react'
import './App.css'
import Box from './ui/Box'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page404 from './pages/NotFound'
import { BrowserRouter } from 'react-router-dom'
import Fallback from './ui/FallBack'
import Router from './Router'

const App = () => {
	return (
		<Fragment>
			<Header />
			<BrowserRouter>
				<Suspense fallback={<Fallback />}>
					<Router />
				</Suspense>
			</BrowserRouter>
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
