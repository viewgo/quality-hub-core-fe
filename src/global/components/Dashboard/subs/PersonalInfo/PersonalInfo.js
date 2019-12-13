// Libraries
import React from 'react';

// Icons
import Icon from '../../../../icons/Icon';
import { ICONS } from '../../../../icons/iconConstants';

// Components
import BasicInfo from './subs/BasicInfo';
import Accounts from './subs/Accounts';
import PaymentInfo from './subs/PaymentInfo';

export default function PersonalInfo() {
	return (
		<div className='dash-personalinfo'>
			<div className='personalinfo-header'>
				<div className='circle-blue'>
					<Icon
						icon={ICONS.PERSONALINFOBIG}
						width={26}
						height={28}
						color='white'
					/>
				</div>
				<h1>Personal Info</h1>
			</div>
			<BasicInfo />
			<Accounts />
			<PaymentInfo />
		</div>
	);
}