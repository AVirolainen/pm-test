import styles from "./ResumesList.module.css";
import Resume from "./Resume/Resume.js"

const ResumesList = () => {
	return (
		<div className={styles.resumesListComponent}>
			<Resume />
			<Resume />
			<Resume />
		</div>);
};

export default ResumesList;
