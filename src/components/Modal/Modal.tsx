// CSS
import styles from "./Modal.module.css";

interface Props {
	children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
	const closeModal = (event: React.MouseEvent): void => {
		const modal = document.querySelector("#modal");
		modal!.classList.add("hide");
	};
	return (
		<div id="modal" className="hide">
			<div className={styles.modal_container}>
				<div className={styles.fade} onClick={closeModal}></div>
				<div className={styles.modal}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
