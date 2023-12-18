import React, { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../client";
import { setQuizzes, updateQuiz } from "../quizzesReducer";

function QuizDetails() {
  const { courseNumber, quizNumber } = useParams();

  const quizzes = useSelector((state) => state.quizzesReducer.quizzes);
  const dispatch = useDispatch();

  const handleUpdateQuiz = async () => {
    try {
      const status = await client.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    client.findQuizzesForCourse(courseNumber).then(
        (quizzes) => dispatch(setQuizzes(quizzes))
    );
  }, [courseNumber]);

  const currentQuiz = quizzes.find((quiz) => quiz.number === quizNumber);
  const [quiz, setQuiz] = useState(currentQuiz); // state only specific to this page

  return (
      currentQuiz &&
      <div className="container">
        <div>
          <button className="btn btn-outline-success"
                  onClick={() => {
                    const toggledPublish = quiz.isPublished === "true" ? "false" : "true";
                    setQuiz({...quiz, isPublished: toggledPublish});
                    handleUpdateQuiz();
                  }}>
            {currentQuiz.isPublished === "true" ?
                `Published` :
                `Unpublished`}
          </button>
          <Link className="btn btn-outline-danger"
                to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Preview`}>
            Preview
          </Link>
          <Link className="btn btn-outline-warning"
                to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Edit`}>
            Edit
          </Link>
        </div>
        <hr />
        <div>
          <h2>{currentQuiz.name}</h2>
          <Link className="btn btn-danger"
                to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Preview`}>
            Preview
          </Link>
        </div>
      </div>
  );
}

export default QuizDetails;
