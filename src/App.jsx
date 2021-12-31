import React from 'react';
import Header from './components/header'
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
	render () {
		return (
			<div>
				<Header/>
				<Routes>
					<Route path = '/projects' element={ <Projects/> }/>
					<Route path = '/about' element={ <About/> }/>
					<Route path = '/' exact element = { <Home/> }/>
					<Route path = '*' element = {
						<div>
							Oops! couldn't find that page.
							<button onClick = { () => history.back() }>
								go back?
							</button>
						</div>
					}/>
				</Routes>
			</div>
		);
	}
}

export default App;