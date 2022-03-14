// import your fontawesome library
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import logo from './logo.svg';
import './styles.css';
import Header from './Header';


/* <FontAwesomeIcon icon={faCoffee} /> */

function App() {
	return (
		<div className='App'>
			<Header />
		</div>
	);
}

export default App;
