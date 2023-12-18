import QuizList from "./QuizList";
import * as client from "./client";
import { addQuiz } from "./quizzesReducer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Quizzes() {
  const { courseNumber } = useParams();

  const stateQuiz = useSelector((state) => state.quizzesReducer.quiz);
  // const stateQuiz = {name: "" }
  const quiz = { ...stateQuiz, course: courseNumber };

  const dispatch = useDispatch();

  const handleAddQuiz = () => {
    client.createQuiz(courseNumber, quiz).then(
        (q) => dispatch(addQuiz(q))
    );
  };
  return(
      <div>
        <h2>Quizzes</h2>
        <button className="btn btn-success"
                onClick={handleAddQuiz}>
          + Quiz
        </button>
        <hr />
        <QuizList />
      </div>
  );
}

export default Quizzes;
