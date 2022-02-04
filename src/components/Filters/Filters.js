import styles from "./Filters.module.css";
import "antd/dist/antd.css";
import { useState } from "react";
import { Switch, Slider, InputNumber, Radio, Checkbox, Tree } from "antd";
import engIcon from "./assets/engIcon.svg";
import gerIcon from "./assets/gerIcon.svg";
import polIcon from "./assets//polIcon.svg";
import rusIcon from "./assets/rusIcon.svg";
import ukrIcon from "./assets/ukrIcon.svg";
import spainIcon from "./assets/spainIcon.svg";

const level = [
	{
		title: <span>(A1) - начальный</span>,
		key: "0-0-0",
		children: [],
	},
	{
		title: <span>(A2) - ниже среднего</span>,
		key: "0-0-1",
		children: [],
	},
	{
		title: <span>(B1) - средний</span>,
		key: "0-0-2",
		children: [],
	},
	{
		title: <span>(В2) - выше среднего</span>,
		key: "0-0-3",
		children: [],
	},
	{
		title: <span>(С1) -продвинутый</span>,
		key: "0-0-4",
		children: [],
	},
	{
		title: <span>(С2) - профессиональный уровень владения</span>,
		key: "0-0-5",
		children: [],
	},
];

const treeData = [
	{
		title: (
			<span>
				<img src={engIcon} className={styles.treeIcon} />
				Английский
			</span>
		),
		key: "0-0",
		children: level,
	},
	{
		title: (
			<span>
				<img src={gerIcon} className={styles.treeIcon} />
				Немецкий
			</span>
		),
		key: "0-1",
		children: level,
	},
	{
		title: (
			<span>
				<img src={polIcon} className={styles.treeIcon} />
				Польский
			</span>
		),
		key: "0-2",
		children: level,
	},
	{
		title: (
			<span>
				<img src={spainIcon} className={styles.treeIcon} />
				Испанский
			</span>
		),
		key: "0-3",
		children: level,
	},
	{
		title: (
			<span>
				<img src={rusIcon} className={styles.treeIcon} />
				Русский
			</span>
		),
		key: "0-4",
		children: level,
	},
	{
		title: (
			<span>
				<img src={ukrIcon} className={styles.treeIcon} />
				Украинский
			</span>
		),
		key: "0-5",
		children: level,
	},
];

const Filters = () => {
	const [isChecked, setIsChecked] = useState(true);
	const [sliderValue, setSliderValue] = useState([18, 70]);
	const [sliderPayValue, setSliderPayValue] = useState([5000, 50000]);
	const handleSwitchChange = () => {
		setIsChecked(!isChecked);
	};

	const handleSlider = (value) => {
		setSliderValue(value);
	};

	const handlePaySlider = (value) => {
		setSliderPayValue(value);
	};

	return (
		<div className={styles.filtersComponent}>
			<div className={styles.filtersHeader}>Фильтры</div>
			<div className={styles.filterPhoto}>
				<div className={styles.filterText}>Только с фотографией</div>
				<Switch
					size="small"
					checked={isChecked}
					onChange={handleSwitchChange}
				/>
			</div>
			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Возраст</div>
				<Slider
					range
					min={18}
					max={70}
					onChange={handleSlider}
					defaultValue={sliderValue}
				/>
				<div className={styles.inputsWrapper}>
					от
					<InputNumber
						min={18}
						max={70}
						style={{ margin: "0 16px" }}
						value={sliderValue[0]}
					/>
					до
					<InputNumber
						min={18}
						max={70}
						style={{ margin: "0 16px" }}
						value={sliderValue[1]}
					/>
					лет
				</div>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Пол</div>
				<Radio.Group>
					<Radio.Button
						style={{
							height: "50px",
							width: "105px",
							paddingTop: "10px",
							textAlign: "center",
						}}
						value="large"
					>
						{" "}
						Любой{" "}
					</Radio.Button>
					<Radio.Button
						style={{
							height: "50px",
							width: "105px",
							paddingTop: "10px",
						}}
						value="default"
					>
						Женщины
					</Radio.Button>
					<Radio.Button
						style={{
							height: "50px",
							width: "105px",
							paddingTop: "10px",
						}}
						value="small"
					>
						Мужчины
					</Radio.Button>
				</Radio.Group>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Желаемая зарплата</div>
				<Slider
					range
					min={5000}
					max={50000}
					onChange={handlePaySlider}
					defaultValue={sliderPayValue}
				/>
				<div className={styles.inputsWrapper}>
					от
					<InputNumber
						min={5000}
						max={50000}
						style={{ margin: "0 16px" }}
						value={sliderPayValue[0]}
					/>
					до
					<InputNumber
						min={5000}
						max={50000}
						style={{ margin: "0 16px" }}
						value={sliderPayValue[1]}
					/>
					лет
				</div>
				<div className={styles.filterWrapper}>
					<div className={styles.filterPay}>
						Не показывать без зарплаты
					</div>
					<Switch size="small" />
				</div>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Опыт работы</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Без опыта</Checkbox>
					<div>603</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>До 1 года</Checkbox>
					<div>274</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>От 1 до 2 лет</Checkbox>
					<div>485</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>От 2 до 5 лет</Checkbox>
					<div>524</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>От 5 до 10 лет</Checkbox>
					<div>236</div>
				</div>
				<div className={styles.filterWrapper}>
					<div className={styles.filterStudent}>Только студенты</div>
					<Switch size="small" />
				</div>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Владение языками</div>
				<Tree checkable treeData={treeData} />
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Тип занятости</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Полная занятость</Checkbox>
					<div>34567</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Неполная занятость</Checkbox>
					<div>876</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Удаленная работа</Checkbox>
					<div>1234</div>
				</div>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterInnerText}>Образование</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Высшее</Checkbox>
					<div>34567</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Неоконченное высшее</Checkbox>
					<div>876</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Средне-специальное</Checkbox>
					<div>1234</div>
				</div>
				<div className={styles.experienceWrapper}>
					<Checkbox>Средне</Checkbox>
					<div>885</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
