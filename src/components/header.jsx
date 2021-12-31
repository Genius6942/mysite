import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';


class Header extends React.Component {
	render () {
		return (
			<ul className = { styles.header }>
				<li><NavLink exact = "true" to="/" className = { ({ isActive }) => isActive ? styles.active : '' }>Home</NavLink></li>
				<li><NavLink exact = "true" to="/projects" className = { ({ isActive }) => isActive ? styles.active : '' }>Projects</NavLink></li>
				<li><NavLink exact = "true" to="/about" className = { ({ isActive }) => isActive ? styles.active : '' }>About</NavLink></li>""
			</ul>
		);
	}
}

export default Header;