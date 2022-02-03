import styles from "./Header.module.css";
import store from "../../App.js";
import { useSelector } from "react-redux";
import languageIcon from "./assets/languageIcon.svg"
import HeaderSearch from "./HeaderSearch/HeaderSearch.js"

const Header = () => {
	const counter = useSelector((state) => state);
	console.log(counter);
	return (
		<div className={styles.headerComponent}>
			<div className={styles.headerContainer}>
				<div className={styles.positionName}>
					<div className={styles.positionItem}>Соискатель</div> |
					<div className={styles.positionItem}>Работодатель</div> |
					<div className={styles.positionItem}>HR</div>
				</div>
				<div className={styles.headerLanguages}>
					<div className={styles.languageBlock}>
						<img src={languageIcon} />
						<select className={styles.selectItem}>
							<option className={styles.optionItem}>RU</option>
							<option className={styles.optionItem}>UKR</option>
							<option className={styles.optionItem}>EN</option>
						</select>
					</div>
					<div className={styles.enterButton}>Войти</div>
				</div>
			</div>
			<HeaderSearch />
		</div>
	);
};

export default Header;
