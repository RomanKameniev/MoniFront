import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import getRoutes from './routes'
import { viewer } from './selectors'
import NotFound from './pages/NotFound'

const RenderRoutes = () => {
	// const authenticated = useSelector(viewer)

	const routes = getRoutes(false)

	return (
		routes.length > 0 && (
			<Switch>
				{routes.map((route) => (
					<Route key={route.path} {...route} />
				))}
				<Route path="/not-found" component={NotFound} />
				<Redirect from="/*" to="/not-found" />
			</Switch>
		)
	)
}

export default RenderRoutes
