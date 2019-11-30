import React from 'react';

import LoginCheck from '../../../utils/loginCheck';
import CoachCheck from '../../../utils/coachCheck';

export default function ApolloClientPractice() {
	LoginCheck() ? console.log('Logged in!') : console.log('Not logged in!');
	CoachCheck() ? console.log('Coach!') : console.log('Not a coach!');

	return <div>Apollo Client Practice</div>;
}
