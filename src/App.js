import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";
import ResumesList from "./components/ResumesList/ResumesList.js";

function App() {
	return (
		<div className={styles.appComponent}>
			<Header />
			<div className={styles.bodyContainer}>
				<div className={styles.bodyHeader}>
					Мы подобрали
					<span className={styles.resumesAmount}>451 642</span>
					резюме
				</div>
				Резюме продавец консультант во Всей Украине
				<select className={styles.timeFilter}>
					<option>за все время</option>
					<option>за месяц</option>
					<option>за неделю</option>
				</select>
				<ResumesList />
			</div>
			<Footer />
		</div>
	);
}

export default App;
