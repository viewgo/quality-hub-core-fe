// Libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import DeleteModal from './DeleteModal';

// Hooks
import useModal from '../../../utils/useModal';

export default function LeftNavBar({ setLoggedin }) {
	const [profileDropdownToggle, setProfileDropdownToggle] = useState(false);
	const { isShowing, toggle } = useModal();

	const profileDropdown = () => {
		setProfileDropdownToggle(!profileDropdownToggle);
	};

	return (
		<div className='dashboard-left-bar'>
			<p onClick={() => profileDropdown()}>
				<span className='gray-square'></span> Dashboard
			</p>
			{profileDropdownToggle && (
				<div className='profile-dropdown-links'>
					{/* <Link to='/dashboard'>Basic Info</Link>
					<Link to='/dashboard/experience'>Experience</Link>
					<Link to='/dashboard/paymentinfo'>Payment Info</Link> */}
					<Link to='#' onClick={toggle}>
						Delete Account
					</Link>
				</div>
			)}
			<DeleteModal
				isShowing={isShowing}
				hide={toggle}
				setLoggedin={setLoggedin} // GOAL: Have this be a state variable held in Apollo Client cache
			/>

			<p>
				<Link to='/dashboard'>
					<span className='gray-square'></span> Personal Info
				</Link>
			</p>

			<p>
				<Link to='/dashboard/coachinfo'>
					<span className='gray-square'></span> Coach Info
				</Link>
			</p>

			<p>
				<Link to='/dashboard/schedule'>
					<span className='gray-square'></span> Schedule
				</Link>
			</p>

			<p>
				<Link to='/dashboard/setting'>
					<span className='gray-square'></span> Setting
				</Link>
			</p>

			{/* <p>
				<Link to='/dashboard/interviewq'>
					<span className='gray-square'></span> InterviewQ
				</Link>
			</p> */}
		</div>
	);
}
