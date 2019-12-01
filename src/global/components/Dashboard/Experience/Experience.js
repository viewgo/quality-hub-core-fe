// Libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import DashboardInput from '../DashboardInput';

// Query
const GET_ACCOUNTS = gql`
	query {
		me {
			id
			linkedin_url
			github_url
			personal_url
			twitter_url
			portfolio_url
			blog_url
		}
	}
`;

const Experience = () => {
	// This queries the cache before querying the back-end
	const { data, loading, error } = useQuery(GET_ACCOUNTS);

	error && console.log(error);

	// This uses previous logic of creating an array from Object keys, just moves logic into specific component
	const keys =
		data &&
		Object.keys(data.me).filter(item => item !== '__typename' && item !== 'id');

	return (
		<div className='editform'>
			<h2>Linked Accounts</h2>
			{loading && <p>Loading...</p>}
			{data &&
				keys.map(item => (
					<DashboardInput key={item} userKey={item} userValue={data.me[item]} />
				))}
		</div>
	);
};

export default Experience;
