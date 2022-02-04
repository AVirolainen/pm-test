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

const Resume = () => {
	return (
		<div className={styles.resumeComponent}>
			<span className={styles.avatarBlock}>
				{/* <Avatar size={150} icon={<UserOutlined />} /> */}
				<div className={styles.avatar}></div>
			</span>
			<div className={styles.infoBlock}>
				<div className={styles.position}>Продавец-консультант</div>
				<div className={styles.personalInfo}>
					<div className={styles.name}>Дмитрий, 23 года</div>
					<div className={styles.city}>
						<div className={styles.gioIcon} />
						Kiev, Ukraine
					</div>
				</div>
				<div className={styles.experience}>
					<div className={styles.experienceItem}>
						Координатор BALOX Agency - 4 мес.
					</div>
					<div className={styles.experienceItem}>
						Оператор кол центра в DELTA - 11 мес.
					</div>
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
