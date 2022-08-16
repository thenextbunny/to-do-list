import { useState } from "react";

// Components
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";

// CSS
import styles from "./Main.module.css";

// Interfaces
import { ITask } from "../../interfaces/Task";

const Main = () => {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

	const deleteTask = (id: number) => {
		setTaskList(
			taskList.filter((task) => {
				return task.id !== id;
			})
		);
	};

	const hideOrShowModal = (display: boolean) => {
		const modal = document.querySelector("#modal");

		if (display) {
			modal!.classList.remove("hide");
		} else {
			modal!.classList.add("hide");
		}
	};

	const editTask = (task: ITask): void => {
		hideOrShowModal(true);
		setTaskToUpdate(task);
	};

	const updateTask = (id: number, title: string, description: string) => {
		const updatedTask: ITask = { id, title, description };

		const updatedItems = taskList.map((task) => {
			return task.id === updatedTask.id ? updatedTask : task;
		});

		setTaskList(updatedItems);
		hideOrShowModal(false);
	};

	return (
		<>
			<Modal children={<TaskForm titleText="Editando tarefa" btnText="Editar tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} />
			<main className={styles.main}>
				<div>
					<TaskForm titleText="Adicione uma tarefa" btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
				</div>
				<div>
					<TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
				</div>
			</main>
		</>
	);
};

export default Main;
