// Libraries
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Styles
import './Dashboard.scss';

// Components
import LeftNavBar from './LeftNavBar';
import PaymentInfo from './PaymentInfo';
import BasicInfo from './BasicInfo';
import Experience from './Experience';
import Schedule from './Schedule';
import DashInterviewQ from './DashInterviewQ';

// GraphQuaiL Query
const GET_USER = gql`
	query {
		me {
			id
			bio
			first_name
			last_name
			email
			city
			state
			linkedin_url
			github_url
			portfolio_url
			personal_url
			gender
			twitter_url
			blog_url
			payment_info
		}
	}
`;

//COMponent - <Ryan's accent>
const Dashboard = ({ setLoggedin }) => {
	// This queries the backend for all the user data
	useQuery(GET_USER);

	return (
		<div className='entire-dashboard'>
			<div className='lower-dashboard'>
				<LeftNavBar setLoggedin={setLoggedin} />
				<div className='dashboard-routes'>
					<div className='dashboard-top-links'>
						<Link to='/dashboard'>Basic Info</Link>
						<Link to='/dashboard/experience'>Experience</Link>
						<Link to='/dashboard/paymentinfo'>Payment Info</Link>
					</div>
					<Switch>
						<Route exact path='/dashboard'>
							<BasicInfo />
						</Route>
						<Route exact path='/dashboard/experience'>
							<Experience />
						</Route>
						<Route exact path='/dashboard/paymentinfo'>
							<PaymentInfo />
						</Route>
						<Route exact path='/dashboard/schedule'>
							<Schedule />
						</Route>
						<Route exact path='/dashboard/interviewq'>
							<DashInterviewQ />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
