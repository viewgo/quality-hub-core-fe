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
	const { data } = useQuery(GET_BASICINFO);

	const keys =
		data && Object.keys(data.me).filter(item => item !== '__typename');

	return (
		<div className='editform'>
			<DashboardAvatar />
			{keys &&
				keys.map(item => (
					<DashboardInput key={item} userKey={item} userValue={data.me[item]} />
				))}
		</div>
	);
};

export default BasicInfo;
