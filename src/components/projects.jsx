import React from 'react';
import styles from './projects.module.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
	render () {
		return (
			<Link to = { this.props.url || 'e' } className = { styles.cardOuter }>
				<div className = { styles.card }>
					<h1 className = { styles.header }>
						{ this.props.name || 'header'}
					</h1>
				</div>
			</Link>
		);
	}
}

class Projects extends React.Component {
	render () {
		return (
			<div>
				<Card name = 'Games' url = '/projects/games'/>
			</div> 
		);
	}
}

export default Projects;