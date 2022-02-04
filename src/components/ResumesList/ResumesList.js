import styles from "./ResumesList.module.css";
import Resume from "./Resume/Resume.js"
import { useSelector } from "react-redux";

const ResumesList = () => {
	const counter = useSelector((state) => state);
	return (
		<div className={styles.resumesListComponent}>
			<Resume />
			<Resume />
			<Resume />
		</div>);
};

export default ResumesList;
