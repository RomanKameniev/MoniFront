import React, { Suspense } from 'react'
import {  Route, Redirect, Switch } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import getRoutes from './routes'
// import { viewer } from './selectors'
import NotFound from './pages/NotFound'
import Fallback from './ui/FallBack'


const RenderRoutes = () => {

	// const authenticated = useSelector(viewer)

	const routes = getRoutes(false)
	console.log('routes', routes)
	return (
		routes.length > 0 && (
				<Suspense fallback={<Fallback />}>
					<Switch>
						{routes.map((route) => (
							<Route key={route.path} {...route} />
						))}
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/*" to="/not-found" />
					</Switch>
				</Suspense>
		)
	)
}

export default RenderRoutes
