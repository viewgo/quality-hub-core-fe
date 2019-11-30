// Libraries
import React from 'react';

// Styles
import './DashboardAvatar.scss';

// Components
import Avatar from '../../../Avatar';

export default function DashboardAvatar() {
	return (
		<div className='dash-avatar-wrapper'>
			<h3 className='dash-avatar-heading'>Avatar</h3>
			<Avatar />
		</div>
	);
}
