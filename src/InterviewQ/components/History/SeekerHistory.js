import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { isPast } from '../../../utils/isPast';

import SeekerHistoryRow from './SeekerHistoryRow';

const GET_SEEKERBOOKINGS = gql`
	query getSeekerHistory($seeker_id: String!) {
		bookingsBySeeker(seeker_id: $seeker_id) {
			id
			year
			month
			day
			hour
			minute
			coach {
				first_name
				last_name
			}
			uniquecheck
			report {
				strengths
				growthAreas
				suggestions
				additionalComments
			}
			review {
				id
			}
		}
	}
`;

export default function SeekerHistory() {
	const seeker_id = localStorage.getItem('id');

	const { loading, error, data } = useQuery(GET_SEEKERBOOKINGS, {
		variables: { seeker_id },
	});

	error && console.log(error);

	const headings = ['Coach', 'Date', 'Time', 'Review', 'Report'];

	const filteredData = data
		? data.bookingsBySeeker.filter(booking =>
				isPast(
					booking.year,
					booking.month,
					booking.day,
					booking.hour,
					booking.minute,
				),
		  )
		: [];

	return (
		<div>
			<h3>Seeker History</h3>
			{data && filteredData.length ? (
				<div className='seeker-history-headings'>
					{headings.map(heading => (
						<h4>{heading}</h4>
					))}
				</div>
			) : (
				<p>You have no previous bookings as a Seeker</p>
			)}
			{loading && <p>Loading...</p>}
			{data &&
				filteredData.map(booking => (
					<SeekerHistoryRow key={booking.id} booking={booking} />
				))}
		</div>
	);
}
