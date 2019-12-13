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
	const { data, loading, error } = useQuery(GET_BASICINFO);

	error && console.log(error);

	const keys =
		data &&
		Object.keys(data.me).filter(item => item !== 'id' && item !== '__typename');

	return (
		<div className='editform basiceditform'>
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