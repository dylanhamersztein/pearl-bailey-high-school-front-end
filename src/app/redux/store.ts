import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { studentApi } from "./student/studentApi";
import appReducer from "./appSlice";
import studentReducer from "./student/studentSlice";
import teacherReducer from "./teachers/teacherSlice";
import { teacherApi } from "./teachers/teacherApi";

const rootReducer = combineReducers({
  [studentApi.reducerPath]: studentApi.reducer,
  [teacherApi.reducerPath]: teacherApi.reducer,
  teachers: teacherReducer,
  students: studentReducer,
  app: appReducer,
});

export const setupStore = (preloadedState?: PreloadedState<State>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware()
        .concat(studentApi.middleware)
        .concat(teacherApi.middleware),
  });

export type State = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof setupStore>;
// @ts-ignore
export type Dispatch = typeof Store["dispatch"];
