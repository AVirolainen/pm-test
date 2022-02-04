import "antd/dist/antd.css";
import styles from "./Resume.module.css";
import { Avatar, Popover } from "antd";
import { UserOutlined, HeartOutlined, MoreOutlined } from "@ant-design/icons";

const content = (
	<div>
		<p style={{cursor: "pointer"}}>Пожаловаться</p>
		<p style={{cursor: "pointer"}}>Скрыть кандидата</p>
	</div>
);

const Resume = (props) => {
	const info = props.info
	return (
		<div className={styles.resumeComponent}>
			<span className={styles.avatarBlock}>
				{info.photo ? 
				<div className={styles.avatar}>
					<img src={info.photo} className={styles.avatar}/>
				</div> :
				<div className={styles.avatar}></div>}
			</span>
			<div className={styles.infoBlock}>
				<div className={styles.position}>{info.desiredposition[0].position.split(",")[0] || "Boss"}</div>
				<div className={styles.personalInfo}>
					<div className={styles.name}>{info.first_name || "Dmitry" }, 23 года</div>
					<div className={styles.city}>
						{info.phone_number}
					</div>
				</div>
				<div className={styles.experience}>
					{info.workexperience.slice(0, 2).map(item => {
						return (
					<div className={styles.experienceItem}>
						{item.company_name}{"-"}{item.position}
					</div>
					)
					})}
				</div>
				<div className={styles.status}>
					<div className={styles.timeAgo}>
						Обновлено 9 минут назад
					</div>
					<div className={styles.online}>
						<div className={styles.statusImage} />
						Онлайн
					</div>
				</div>
			</div>
			<div className={styles.buttonsBlock}>
				<div className={styles.buttonsWrapper}>
					<div className={styles.button}>
						<HeartOutlined
							style={{ fontSize: "30px", color: "#F42C3C" }}
						/>
					</div>
					<Popover content={content} trigger="click" placement="left">
					<div className={styles.button}>
						<MoreOutlined
							style={{ fontSize: "30px", color: "#0096C7" }}
						/>
					</div>
					</Popover>
				</div>
			</div>
		</div>
	);
};

export default Resume;
