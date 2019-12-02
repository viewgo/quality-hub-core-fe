import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './global/components/NavBar';
import './globalStyles/index.scss';
import InterviewQ from './global/routes/InterviewQ';
import Core from './global/routes/Core';

import { useAuth0 } from "./react-auth0-spa";

function App() {
	const [loggedin, setLoggedin] = useState(false);
	const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }



	return (
		<div className='App'>
			<Route
				path='/'
				render={props => (
					<NavBar {...props} loggedin={loggedin} setLoggedin={setLoggedin} />
				)}
			/>
			<div className='not-nav'>
				<Core loggedin={loggedin} setLoggedin={setLoggedin} />
				<InterviewQ loggedin={loggedin} setLoggedin={setLoggedin} />
			</div>
		</div>
	);
}

export default App;
