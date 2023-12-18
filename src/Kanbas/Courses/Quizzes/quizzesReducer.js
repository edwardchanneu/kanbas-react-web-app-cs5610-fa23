import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  quiz: { name: "Default New Quiz Name", isPublished: "false"},
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes = [
        ...state.quizzes,
        action.payload,
      ];
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
          (q) => q.number !== action.payload
      );
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((q) => {
        if (q.number === action.payload.number) {
          return action.payload;
        } else {
          return q;
        }
      });
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

export const { addQuiz, deleteQuiz, updateQuiz,
  setQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;
