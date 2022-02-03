import "antd/dist/antd.css";
import styles from "./Resume.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Resume = () => {
	return (
		<div className={styles.resumeComponent}>
			<div className={styles.avatarBlock}>
				<Avatar size={170} icon={<UserOutlined />} />
			</div>
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
			<div className={styles.buttonsBlock}></div>
		</div>
	);
};

export default Resume;
