import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import vacancies from "./reducers/reducers.js";
import reportWebVitals from "./reportWebVitals";

let store = createStore(vacancies);

fetch("http://135.181.30.244:27007/api/summaries/")
	.then((response) => {
		return response.json();
	}).then((data)=> {
		store.dispatch({type: "SET_VACANCIES", payload:data})
	})


ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
