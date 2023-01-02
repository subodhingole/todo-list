//importing libraries and components
import { React, useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar.js";

function App() {
	//using useState to set the initial state of the products
	const [todos, setTodos] = useState([]);

	//using useEffect to fetch the data from local storage
	useEffect(() => {
		const localTodos = JSON.parse(localStorage.getItem("todos"));
		if (localTodos) {
			setTodos(localTodos);
		}
		console.log(localTodos);
		console.log("changed todos");
	}, []);

	// Using UseEffect to set the data to local storage for everytime the state changes
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// When ever a todo is completed or deleted, the state is updated
	const handleComplete = (todo) => {
		const newTodos = [...todos];
		const index = newTodos.indexOf(todo);
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	const handleDelete = (todo) => {
		const newTodos = [...todos];
		const index = newTodos.indexOf(todo);
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<>
			{/* Navbar Component */}
			<Navbar />

			{/* Home Component */}
			<Home
				setTodos={setTodos}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
				todos={todos}
			/>
		</>
	);
}

export default App;
