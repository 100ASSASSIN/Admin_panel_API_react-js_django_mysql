import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>ASSASSIN</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/assassin">Admin panel</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;