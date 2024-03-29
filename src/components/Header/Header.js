import styles from "./Header.module.css";
import store from "../../App.js";
import languageIcon from "./assets/languageIcon.svg";
import HeaderSearch from "./HeaderSearch/HeaderSearch.js";

const Header = () => {
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
				<div className={styles.mobPositionSelection}>
					<select className={styles.selectItem}>
						<option className={styles.optionItem}>
							Соискатель
						</option>
						<option className={styles.optionItem}>
							Работодатель
						</option>
						<option className={styles.optionItem}>HR</option>
					</select>
				</div>
			</div>
			<div className={styles.userNameBlock}>
				<div className={styles.userIcon} />
				<div className={styles.userName}>Юра Марченко</div>
			</div>

			<HeaderSearch />
		</div>
	);
};

export default Header;
