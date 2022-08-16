// CSS
import styles from "./TaskList.module.css";

// Images
import Edit from "../../assets/images/edit.svg";
import Trash from "../../assets/images/trash.svg";

// Interfaces
import { ITask } from "../../interfaces/Task";

interface Props {
	taskList: ITask[];
	handleDelete(id: number): void;
	handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
	return (
		<div className={styles.tasks}>
			<h2>Suas tarefas</h2>
			{taskList.length > 0 ? (
				taskList.map((task) => (
					<div key={task.id} className={styles.task}>
						<div className={styles.details}>
							<h4>{task.title}</h4>
							<p>Descrição: {task.description}</p>
						</div>
						<div className={styles.actions}>
							<img
								src={Edit}
								alt="Editar"
								title="Editar"
								onClick={() => {
									handleEdit(task);
								}}
							/>
							<img
								src={Trash}
								alt="Excluir"
								title="Excluir"
								onClick={() => {
									handleDelete(task.id);
								}}
							/>
						</div>
					</div>
				))
			) : (
				<p>Não foi encontrada nenhuma tarefa</p>
			)}
		</div>
	);
};

export default TaskList;
