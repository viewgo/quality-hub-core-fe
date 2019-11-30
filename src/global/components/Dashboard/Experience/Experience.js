// Libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import DashboardInput from '../DashboardInput';

// Query
const GET_EXPERIENCE = gql`
	query {
		me {
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
	const { data } = useQuery(GET_EXPERIENCE);

	const keys =
		data && Object.keys(data.me).filter(item => item !== '__typename');

	return (
		<div className='editform'>
			{keys &&
				keys.map(item => (
					<DashboardInput key={item} userKey={item} userValue={data.me[item]} />
				))}
		</div>
	);
};

export default Experience;
