import styles from "./Footer.module.css";
import {
	TwitterOutlined,
	LinkedinOutlined,
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
	return (
		<div className={styles.footerComponent}>
			<div className={styles.footerContainer}>
				<div className={styles.infoContainer}></div>
				<div className={styles.infoContainer}>
					<div className={styles.containerHeader}>Другое</div>
					<div className={styles.containerItem}>Про нас</div>
					<div className={styles.containerItem}>Блог</div>
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.containerHeader}>
						Сотрудничество с нами
					</div>
					<div className={styles.containerItem}>Реклама на сайте</div>
					<div className={styles.containerItem}>
						Партнерская программа
					</div>
					<div className={styles.containerItem}>Контакты</div>
				</div>
				<div className={styles.infoContainer}>
					<TwitterOutlined style={{ fontSize: "32px" }} />
					<LinkedinOutlined style={{ fontSize: "32px" }} />
					<FacebookOutlined style={{ fontSize: "32px" }} />
					<InstagramOutlined style={{ fontSize: "32px" }} />
					<YoutubeOutlined style={{ fontSize: "32px" }} />
				</div>
			</div>
			<div className={styles.privacyText}>
				<div className={styles.privacyElement}>Privacy Policy</div>
				<div className={styles.privacyElement}>
					© 2021 All rights reserved
				</div>
				<div className={styles.privacyElement}>Terms of Use</div>
			</div>
		</div>
	);
};

export default Footer;
