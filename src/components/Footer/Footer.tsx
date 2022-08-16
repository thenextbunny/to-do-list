// CSS
import styles from "./Footer.module.css";

// Images
import Email from "../../assets/images/email.svg";
import GitHub from "../../assets/images/github.svg";
import LinkedIn from "../../assets/images/linkedin.svg";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.text}>
				<p>
					Desenvolvido por <strong>Vitor Coelho</strong>
				</p>
			</div>
			<div className={styles.icons}>
				<span>
					<a href="http://github.com/thenextbunny" target="_blank" rel="noopener noreferrer">
						<img src={GitHub} alt="Perfil do Vitor Coelho no GitHub" />
					</a>
				</span>
				<span>
					<a href="https://www.linkedin.com/in/vitorcoelhot/" target="_blank" rel="noopener noreferrer">
						<img src={LinkedIn} alt="Perfil do LinkedIn do Vitor Coelho" />
					</a>
				</span>
				<span>
					<a href="mailto:vitorcoelhosilvat@gmail.com" target="_blank" rel="noopener noreferrer">
						<img src={Email} alt="Email do Vitor Coelho" />
					</a>
				</span>
			</div>
		</footer>
	);
}

export default Footer;
