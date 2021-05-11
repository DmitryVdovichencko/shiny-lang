import { combineReducers } from '@reduxjs/toolkit';
export const history = createBrowserHistory();

const rootReducer = combineReducers({
	// router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;