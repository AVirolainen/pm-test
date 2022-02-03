import styles from "./HeaderSearch.module.css"

const HeaderSearch = ()=>{
	return(
		<div className={styles.headerSearch}>
			<input type="text" placeholder="На какую должность вы ищете кандидата?" className={styles.vacancySearch}></input>
			<input type="text" placeholder="Город" className={styles.vacancySearch}></input>
			<div className={styles.candidatesButton}>Найти кандидатов</div>
		</div>
	)
}

export default HeaderSearch