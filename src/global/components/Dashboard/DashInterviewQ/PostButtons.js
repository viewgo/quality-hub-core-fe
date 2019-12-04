import React, { useEffect, useState } from 'react';

const PostButtons = ({
	editing,
	setEditing,
	handleCancel,
	handleSubmit,
	index,
}) => {

	const [focusvar, setFocusvar] = useState(false);
	const handleEdit = () => {
		// console.log('running', editing)
		let newArr = [];
		newArr = [...editing];
		newArr[index] = true;
		setEditing(newArr);
		setFocusvar(!focusvar);
	};

	useEffect(() => {
		if (editing[index]) {
			document.getElementById(`edit-post-${index}`).focus();
		}
	}, [focusvar]);

	// console.log(editing);

	return (
		<>
			<div className='update-btns edit-btn'>
				{editing[index] && (
					// Cancel out of editing mode
					<button onClick={() => handleCancel(index)} className='cancel-button'>
						Cancel
					</button>
				)}
				{editing[index] && (
					// Save changes made in editing mode
					<button
						onClick={e => handleSubmit(e, index)}
						className='accept-button'>
						Save
					</button>
				)}
			</div>
			{!editing[index] && (
				//button to click on to enter editing mode
				<button
					className='edit-button'
					onClick={handleEdit}
					data-testid='edit-button' //data-testid made explicitly for testing-purposes
				>
					Edit
				</button>
			)}
		</>
	);
};

export default PostButtons;
