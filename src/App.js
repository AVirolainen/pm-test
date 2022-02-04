import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";
import ResumesList from "./components/ResumesList/ResumesList.js";
import Filters from "./components/Filters/Filters.js";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal } from "antd";

function App() {
	const [isFiltering, setIsFiltering] = useState(false);

	const showModal = () => {
		setIsFiltering(true);
	};

	const handleOk = () => {
		setIsFiltering(false);
	};

	const handleCancel = () => {
		setIsFiltering(false);
	};

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
				<div
					type="checkbox"
					className={styles.hamburgerButton}
					onClick={showModal}
				>
					<UnorderedListOutlined />
				</div>
				<Modal
					title="Фильтры"
					visible={isFiltering}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<Filters />
				</Modal>
				<span className={styles.bodyWrapper}>
					<ResumesList />
					<div className={styles.filterWrapper}>
						<Filters />
					</div>
				</span>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
