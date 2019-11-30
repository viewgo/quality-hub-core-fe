import { useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default function LoginCheck() {
	const client = useApolloClient();

	const loginStatus = client.readQuery({
		query: gql`
			query {
				isLoggedIn
			}
		`,
	});

	return loginStatus.isLoggedIn;
}
