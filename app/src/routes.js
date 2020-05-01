import React from 'react'
import { Redirect } from 'react-router-dom'

const Login = React.lazy(() =>
	import(
		/* webpackChunkName: login*/
		'./pages/Login'
	)
)
const Registration = React.lazy(() =>
	import(
		/* webpackChunkName: registration*/
		'./pages/Registration'
	)
)
const Profile = React.lazy(() =>
	import(
		/* webpackChunkName: registration*/
		'./pages/Profile'
	)
)
const Home = React.lazy(() =>
	import(
		/* webpackChunkName: home*/
		'./pages/Home'
	)
)
const HomeAuth = React.lazy(() =>
	import(
		/* webpackChunkName: home*/
		'./pages/HomeAuth'
	)
)

export const AuthRoutes = [
	// { path: '/set-password/:token', children: <SetPassword />, exact: true },
	{ path: '/login', children: <Login />, exact: true },
	// { path: '/forgot-password', children: <ForgotPassword />, exact: true },
	{ path: '/registration', children: <Registration />, exact: true },
]
export const AuthorizedRoutes = [
	 { path: '/', children: <Home /> },
	{ path: '/profile', children: <Profile />, exact: true },
]

export const unAuthorizedRoutes = [...AuthRoutes, { path: '/', children: <Home /> }]

const unauthorizedRedirectRoutes = AuthorizedRoutes.map(({ path, exact }) => ({
	path,
	exact,
	children: <Redirect to="/login" from={path} />,
})).filter(({ path }) => !unAuthorizedRoutes.some((r) => path === r.path))

const getRoutes = (authenticated) => {
	if (authenticated) return [...AuthRoutes]

	return [...unAuthorizedRoutes, ...unauthorizedRedirectRoutes]
}

export default getRoutes

// ;<Router>
// 	<Switch>
// 		<Route path="/profile" exact>
// 			<Profile />
// 		</Route>
// 		<Route path="/" exact>
// 			<Home />
// 		</Route>
// 	</Switch>
// 	
// </Router>
