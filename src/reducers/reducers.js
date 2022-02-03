let initialState = {};

export default function vacanciesReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_VACANCIES":
			return { ...state, ...action.payload };
		case "counter/decremented":
			return { value: state.value - 1 };
		default:
			return state;
	}
}
