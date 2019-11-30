import { useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default function CoachCheck() {
	const client = useApolloClient();

	const coachStatus = client.readQuery({
		query: gql`
			query {
				isCoach
			}
		`,
	});

	return coachStatus.isCoach;
}
