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
			payment_info
		}
	}
`;

const PaymentInfo = () => {
	const { data } = useQuery(GET_PAYMENTINFO);

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

export default PaymentInfo;
