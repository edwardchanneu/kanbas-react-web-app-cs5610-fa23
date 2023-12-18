import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import QuizEditorNavigation from "./QuizEditorNavigation";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionsEditor from "./QuizQuestionsEditor";
import * as client from "../client";
import { setQuizzes, updateQuiz } from "../quizzesReducer";

function QuizEditor() {
  const { courseNumber, quizNumber } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizzes = useSelector((state) => state.quizzesReducer.quizzes);

  useEffect(() => {
    client.findQuizzesForCourse(courseNumber).then(
        (quizzes) => dispatch(setQuizzes(quizzes))
    );
  }, [courseNumber]);

  const currentQuiz = quizzes.find((quiz) => quiz.number === quizNumber);
  const [quiz, setQuiz] = useState(currentQuiz); // state only specific to this page and the editor pages

  const handleUpdateQuiz = async () => {
    try {
      const status = await client.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSave = () => {
  //   handleUpdateQuiz().then((status) => {
  //     // dispatch(updateQuiz(quiz));
  //     handleUpdateQuiz();
  //   }).then(() => {
  //     navigate(`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Details`);
  //   });
  // };
  //
  // const handleSaveAsync = async () => {
  //   try {
  //     const status = await client.updateQuiz(quiz);
  //     dispatch(updateQuiz(quiz));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   navigate(`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Details`);
  // };
  //
  // const handleSaveAndPublish = () => {
  //   setQuiz({...quiz, isPublished: "true"});
  //   handleUpdateQuiz().then((status) => {
  //     // dispatch(updateQuiz(quiz));
  //     handleUpdateQuiz();
  //   }).then(() => {
  //     navigate(`/Kanbas/Courses/${courseNumber}/Quizzes`);
  //   });
  // };
  //
  // const handleSaveAndPublishAsync = async () => {
  //   setQuiz({...quiz, isPublished: "true"});
  //   try {
  //     const status = await client.updateQuiz(quiz);
  //     dispatch(updateQuiz(quiz));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   navigate(`/Kanbas/Courses/${courseNumber}/Quizzes`);
  // };

  return (quiz &&
      <div className="container">
        <div>
          Points 0
        </div>
        <div>
          {quiz.isPublished === "true" ? `Published` : `Not Published`}
        </div>
        <hr />
        <QuizEditorNavigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={`Details`} />} />
            {/*/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Edit/Details*/}
            <Route path="Details" element={<QuizDetailsEditor quiz={quiz} setQuiz={setQuiz}/>} />
            <Route path="Questions" element={<QuizQuestionsEditor quiz={quiz} setQuiz={setQuiz}/>} />
          </Routes>
        </div>
        <hr />
        <Link className="btn btn-outline-dark"
              to={`/Kanbas/Courses/${courseNumber}/Quizzes`}>
          Cancel
        </Link>
        <button className="btn btn-outline-success"
                onClick={() => {
                  // handleSaveAndPublish()
                  setQuiz({...quiz, isPublished: "true"});
                  handleUpdateQuiz();
                  // navigate(`/Kanbas/Courses/${courseNumber}/Quizzes`);
                }}>
          Save & Publish
        </button>
        <button className="btn btn-warning"
                onClick={() => {
                  // handleSave()
                  handleUpdateQuiz();
                  // navigate(`/Kanbas/Courses/${courseNumber}/Quizzes/${quizNumber}/Details`);
                }}>
          Save
        </button>
      </div>
  );
}

export default QuizEditor;
