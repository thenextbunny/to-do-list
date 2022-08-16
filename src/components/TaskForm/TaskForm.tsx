import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./TaskForm.module.css";

// Interfaces
import { ITask } from "../../interfaces/Task";

interface Props {
	titleText: string;
	btnText: string;
	taskList: ITask[];
	setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
	task?: ITask | null;
	handleUpdate?(id: number, title: string, description: string): void;
}

const TaskForm = ({ titleText, btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
	const [id, setId] = useState<number>(0);
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	useEffect(() => {
		if (task) {
			setId(task.id);
			setTitle(task.title);
			setDescription(task.description);
		}
	}, [task]);

	const handleChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		if (event.target.name === "title") {
			setTitle(event.target.value);
		} else if (event.target.name === "description") {
			setDescription(event.target.value);
		}
	};

	const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (handleUpdate) {
			handleUpdate(id, title, description);
		} else {
			const id = Math.floor(Math.random() * 1000);

			const newTask: ITask = { id, title, description };

			setTaskList!([...taskList, newTask]); // Exclamação diz ao TS que a função irá vir

			setTitle("");
			setDescription("");

			console.log(taskList);
		}
	};

	return (
		<form onSubmit={addTaskHandler} className={styles.form}>
			<h2>{titleText}</h2>
			<div className={styles.box}>
				<label htmlFor="title">Título:</label>
				<input type="text" name="title" id="title" placeholder="Ir ao supermercado" onChange={handleChange} value={title} required />
			</div>
			<div className={styles.box}>
				<label htmlFor="">Descrição:</label>
				<textarea name="description" id="description" placeholder="Comprar frutas e legumes" onChange={handleChange} value={description} required></textarea>
			</div>
			<div className={styles.box}>
				<button type="submit">{btnText}</button>
			</div>
		</form>
	);
};

export default TaskForm;
