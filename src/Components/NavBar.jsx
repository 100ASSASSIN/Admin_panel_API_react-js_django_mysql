import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
const NavBar = () => {
	return (
		<div id='nav'>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>ASSASSIN UNIVERSAL STUDIOS</h1>
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
							<NavLink to="/about">Test api key</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;