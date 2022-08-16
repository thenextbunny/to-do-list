import styles from "./Header.module.css";

import List from "../../assets/images/list.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={List} alt="List" />
			<h1>To Do List</h1>
		</header>
	);
};

export default Header;
