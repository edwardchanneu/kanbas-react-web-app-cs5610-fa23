import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import quizzesReducer from "../Courses/Quizzes/quizzesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    quizzesReducer
  }
});

export default store;
