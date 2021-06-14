import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
  });
  return store;
};
const store = configureAppStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store }
