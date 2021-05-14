import React, { useContext } from 'react';
import { RouteComponentProps, Route,Redirect } from 'react-router-dom';
import { NonAuthRoutes, AuthRoutes } from './routes';
import { UserRoles } from './userRoles'

interface Props {
	Component: React.FC<RouteComponentProps>
	path: string;
	exact?: boolean;
	requiredRoles: string[];
};

const AuthRoute = ({ Component, path, exact = false, requiredRoles }: Props): JSX.Element => {
	const isAuthed = true;
	const userRole = UserRoles.admin;
	const userHasRequiredRole = requiredRoles.includes(userRole);
	const message = userHasRequiredRole ? 'Please log in to view this page' : "You can't be here!"
	return (
		<Route
			exact={exact}
			path={path}
			render={(props: RouteComponentProps) =>
				isAuthed && userHasRequiredRole ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: !userHasRequiredRole && isAuthed ? 
							AuthRoutes.accessDenied : 
							NonAuthRoutes.signIn,
							state: { 
								message,
								requestedPath: path 
							}
						}}
					/>
				)
			}
		/>
	);
};

export default AuthRoute;