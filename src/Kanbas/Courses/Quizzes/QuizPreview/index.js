import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import * as client from "../client";
import { setQuizzes, updateQuiz } from "../quizzesReducer";

function QuizPreview() {
  const { courseNumber, quizNumber } = useParams();

  const quizzes = useSelector((state) => state.quizzesReducer.quizzes);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findQuizzesForCourse(courseNumber).then(
        (quizzes) => dispatch(setQuizzes(quizzes))
    );
  }, [courseNumber, quizNumber]);

  const currentQuiz = quizzes.find((quiz) => quiz.number === quizNumber);
  const { questions } = currentQuiz;

  const getAnswerOptions = (type, answers) => {
    if (type === "MC") {
      return (
          answers.map((ans, index) => (
              <>
                <hr />
                <input type="checkbox" />
                <label>{ans.option}</label>
                <br />
              </>
          ))
      );
    }
    if (type === "TF") {
      return (
          answers.map((ans, index) => (
              <>
                <hr />
                <input type="radio"
                       name="radioTF" />
                <label>     {ans.option}</label>
                <br />
              </>
          ))
      );
    }
    if (type === "FILL") {
      return (
          <>
            <label>Type your answer here: </label>
            <input className="form-control" />
          </>
      )
    }
    return (
        <div>
          <h6>No answer options</h6>
        </div>
    );
  };

  return (
      <div className="container">
        <h3>{currentQuiz.name}</h3>
        <div className="btn btn-outline-warning">
          This is a preview of the quiz.
        </div>
        <h4>Quiz Instructions</h4>
        <hr />
        <ul className="list-group">
          {
            questions.map((q, index) => (
                <div className="card">
                  <div className="card-body">
                    <h5>Question {index + 1}</h5>
                    <h6>{q.points} pts</h6>
                    <hr />
                    <p>{q.prompt}</p>
                    {getAnswerOptions(q.type, q.answers)}
                    <br />
                  </div>
                </div>
            ))
          }
        </ul>
      </div>
  );
}

export default QuizPreview;
