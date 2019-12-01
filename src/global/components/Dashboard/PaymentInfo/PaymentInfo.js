// Libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Components
import DashboardInput from '../DashboardInput';

// Query
const GET_PAYMENTINFO = gql`
	query {
		me {
			id
			payment_info
		}
	}
`;

const PaymentInfo = () => {
	// This queries the cache before querying the back-end
	const { data, loading, error } = useQuery(GET_PAYMENTINFO);

	error && console.log(error);

	// This uses previous logic of creating an array from Object keys, just moves logic into specific component
	const keys =
		data &&
		Object.keys(data.me).filter(item => item !== '__typename' && item !== 'id');

	return (
		<div className='editform'>
			<h2>Payment Info</h2>
			{loading && <p>Loading...</p>}
			{data &&
				keys.map(item => (
					<DashboardInput key={item} userKey={item} userValue={data.me[item]} />
				))}
		</div>
	);
};

export default PaymentInfo;
