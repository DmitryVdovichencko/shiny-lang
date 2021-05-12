import React, { FC } from 'react';
import AppBarHeader from '../AppBarHeader/';
const Layout: FC = (props) => {
	return <div>
		<header>
			<AppBarHeader />
		</header>
		<main>
			{props.children}
		</main>
		<footer></footer>
	</div>
}
export default Layout;