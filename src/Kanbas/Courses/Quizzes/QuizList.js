import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  setQuizzes,
} from "./quizzesReducer";
import * as client from "./client";
import {BsFillCheckCircleFill} from "react-icons/bs";

function QuizList() {
  const { courseNumber } = useParams();

  const quizzes = useSelector((state) => state.quizzesReducer.quizzes);
  // const quizzes = [];
  const stateQuiz = useSelector((state) => state.quizzesReducer.quiz);
  // const stateQuiz = {name: "" }
  const quiz = { ...stateQuiz, course: courseNumber };
  const dispatch = useDispatch();

  const handleUpdateQuiz = async () => {
    try {
      const status = await client.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteQuiz = (quizNum) => {
    client.deleteQuiz(quizNum).then((status) => {
      dispatch(deleteQuiz(quizNum));
    });
  };

  const handleAddQuiz = () => {
    client.createQuiz(courseNumber, quiz).then(
        (q) => dispatch(addQuiz(q))
    );
  };

  useEffect(() => {
    client.findQuizzesForCourse(courseNumber).then(
        (quizzes) => dispatch(setQuizzes(quizzes))
    );
  }, [courseNumber]);

  return (
      <ul className="list-group">
        {
          quizzes
          .filter((quiz) => quiz.course === courseNumber)
          .map((quiz, index) => (
              <li key={quiz.number}
                    className="list-group-item"
                    to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quiz.number}/Details`}>
                <div className="col-8">
                  <Link className="btn btn-warning"
                        to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quiz.number}/Edit`}
                          onClick={(event) =>
                              dispatch(setQuiz(quiz))} >
                    Edit
                  </Link>
                  <button className="btn btn-danger"
                          onClick={() =>
                              handleDeleteQuiz(quiz.number)} >
                    Delete
                  </button>
                  <button className="btn btn-outline-success"
                          onClick={() => {
                            const toggledPublish = quiz.isPublished === "true" ? "false" : "true";
                            dispatch(setQuiz({...quiz, isPublished: toggledPublish}));
                            handleUpdateQuiz();
                          }}>
                    {quiz.isPublished === "true" ? `Unpublish` : `Publish`}
                  </button>
                  <Link key={quiz.number}
                        className="list-group-item"
                        to={`/Kanbas/Courses/${courseNumber}/Quizzes/${quiz.number}/Details`}>
                    <h3>{quiz.name}</h3>
                  </Link>
                </div>
                <div className="col-4">
                  {quiz.isPublished === "true" && <BsFillCheckCircleFill className="me-2 text-success fs-1 text" />}
                </div>
                {/*<pre>{JSON.stringify(quiz)}</pre>*/}
              </li>
          ))
        }
      </ul>
  );
}

export default QuizList;
