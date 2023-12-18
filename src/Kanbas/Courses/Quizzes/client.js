import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const QUIZZES_URL = "http://localhost:4000/api/quizzes";

export const updateQuiz = async (quiz) => {
  const response = await axios
  .put(`${QUIZZES_URL}/${quiz.number}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizNum) => {
  const response = await axios
  .delete(`${QUIZZES_URL}/${quizNum}`);
  return response.data;
};

export const createQuiz = async (courseNum, quiz) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseNum}/quizzes`,
      quiz
  );
  return response.data;
};

export const findQuizzesForCourse = async (courseNum) => {
  const response = await axios
  .get(`${COURSES_URL}/${courseNum}/quizzes`);
  return response.data;
}
