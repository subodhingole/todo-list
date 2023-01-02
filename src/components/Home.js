import React, { useState } from "react";
import Tasks from "./Tasks";

//creating a component called Home
const Home = ({ setTodos, todos, handleComplete, handleDelete }) => {
	const [todo, setTodo] = useState("");
	const handleChange = (e) => {
		setTodo(e.target.value);
	};
	const handleClick = (e) => {
		e.preventDefault();
		var newItem = {
			task: todo,
			date: new Date().toLocaleDateString(),
			completed: false,
		};
		if (todo === "") return;
		setTodos((todos) => [...todos, newItem]);
		setTodo("");
	};

	return (
		<div className="home__container">
			<form>
				<div className="input-container">
					<input
						className="input-todo"
						type={"text"}
						placeholder={"Add Todo"}
						onChange={handleChange}
						value={todo}
					/>
					<button onClick={handleClick} className="add-todo">
						Add Todo
					</button>
				</div>
			</form>
			<Tasks
				todos={todos}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
