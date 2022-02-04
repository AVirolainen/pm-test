import store from "./../../index.js";
import styles from "./ResumesList.module.css";
import Resume from "./Resume/Resume.js";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import {useEffect} from "react"

const ResumesList = () => {
	const resumes = useSelector((state) => state.results);
	const handlePagination = (value) => {
		let url = "http://135.181.30.244:27007/api/summaries/";
		if(store.getState().isFiltering){
			url += "?photo=true"
			value = 1
		}
		if (value != 1) {
			url += "?page=" + value;
		}
		const data = fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				store.dispatch({ type: "SET_VACANCIES", payload: data });
			});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	if (!resumes) {
		return <></>;
	}
	return (
		<div className={styles.resumesListComponent}>
			{resumes.map((item) => {
				return <Resume info={item} />;
			})}
			<div className={styles.paginationWrapper}>
				<Pagination
					defaultCurrent={1}
					total={100}
					onChange={handlePagination}
				/>
			</div>
		</div>
	);
};

export default ResumesList;
