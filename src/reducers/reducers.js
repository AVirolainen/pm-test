let initialState = {
	isFiltering: false
};

export default function vacanciesReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_VACANCIES":
			return { ...state, ...action.payload };
		case "SET_FILTER":
			return {...state, ...{isFiltering: !state.isFiltering}}
		default:
			return state;
	}
}
