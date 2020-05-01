import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import getRoutes from './routes'
import { viewer } from './selectors'
import NotFound from './pages/NotFound'
import Fallback from './ui/FallBack'
import { createBrowserHistory } from 'history'


const RenderRoutes = () => {
	const history = createBrowserHistory()

	// const authenticated = useSelector(viewer)

	const routes = getRoutes(false)
	console.log('routes', routes)
	return (
		routes.length > 0 && (
			// <Router history={history}>
				<Suspense fallback={<Fallback />}>
					<Switch>
						{routes.map((route) => (
							<Route key={route.path} {...route} />
						))}
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/*" to="/not-found" />
					</Switch>
				</Suspense>
			// </Router>
		)
	)
}

export default RenderRoutes
