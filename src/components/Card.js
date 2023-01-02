import React from "react";

//card component
//destructuring props to get the data
const Card = ({ todo, handleComplete, handleDelete }) => {
	const { task, date, completed } = todo;
	return (
		// If the todo is completed, add the class "card-completed" to the card
		<div className={completed ? "card-completed" : "card"}>
			<h3 className="card-todo">{task}</h3>
			<p className="card-date">{date}</p>
			{/* checkmark card button */}
			<div className="card-button-container">
				{/* Done Button triggers the handleComplete function */}
				{!completed && (
					<button
						onClick={() => handleComplete(todo)}
						className="card-done"
					>
						Done
					</button>
				)}
				{/* Delete Button triggers the handleDelete function */}

				<button
					onClick={() => handleDelete(todo)}
					className="card-done"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;
