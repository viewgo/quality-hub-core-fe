// Libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import DashboardAvatar from './DashboardAvatar';
import DashboardInput from '../DashboardInput';

// Query
const GET_BASICINFO = gql`
	query {
		me {
			id
			bio
			first_name
			last_name
			email
			city
			state
		}
	}
`;

const BasicInfo = () => {
	// This queries the cache before querying the back-end
	const { data, loading, error } = useQuery(GET_BASICINFO);

	error && console.log(error);

	// This uses previous logic of creating an array from Object keys, just moves logic into specific component
	const keys =
		data &&
		Object.keys(data.me).filter(item => item !== '__typename' && item !== 'id');

	return (
		<div className='editform'>
			<h2>Basic Info</h2>
			<DashboardAvatar />
			{loading && <p>Loading...</p>}
			{data &&
				keys.map(item => (
					<DashboardInput key={item} userKey={item} userValue={data.me[item]} />
				))}
		</div>
	);
};

export default BasicInfo;
