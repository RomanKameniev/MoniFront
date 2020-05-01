import React from 'react'
import { Redirect } from 'react-router-dom'

const Login = React.lazy(() =>
	import(
		'./pages/Login'
	)
)
const Registration = React.lazy(() =>
	import(
		'./pages/Registration'
	)
)
const Profile = React.lazy(() =>
	import(
		'./pages/Profile'
	)
)
const Home = React.lazy(() =>
	import(
		'./pages/Home'
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
