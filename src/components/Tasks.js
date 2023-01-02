import React from "react";
import Card from "./Card";

// Destructuring the props
const Tasks = ({ todos, handleComplete, handleDelete }) => {
	return (
		<div className="task-container">
			<div className="todos">
				<h1 className="todos-title">Todos</h1>
				{
					//mapping through the todos array and rendering the Card component
					todos.map((todo) => {
						console.log(todo);
						return (
							!todo.completed && (
								<Card
									key={todo.task}
									todo={todo}
									handleDelete={handleDelete}
									handleComplete={handleComplete}
								/>
							)
						);
					})
				}
			</div>
			<div className="completed">
				<h1 className="todos-title">Completed</h1>
				{
					//mapping through the todos array and rendering the Card component
					todos.map((todo) => {
						return (
							todo.completed && (
								<Card
									key={todo.task}
									todo={todo}
									handleDelete={handleDelete}
									handleComplete={handleComplete}
								/>
							)
						);
					})
				}
			</div>
		</div>
	);
};

export default Tasks;
