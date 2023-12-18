import {useState} from "react";

function QuizQuestionsEditor({quiz, setQuiz}) {

  const { questions } = quiz;

  const blankQuestion = {
    prompt: "",
    type: "MC",
    points: "",
    answers: [],
  }

  const [ questionArray, setQuestionArray ] = useState(questions);
  const [ currentQuestion, setCurrentQuestion ] = useState(blankQuestion);
  const [ currentIndex, setCurrentIndex ] = useState(-1);
  const [ currentAnswerArray, setCurrentAnswerArray ] = useState([]);
  const addQuestion = () => {
    setQuestionArray([...questionArray, currentQuestion]);
    setCurrentQuestion(blankQuestion);
    setQuiz({
      ...quiz, questions: questionArray
    });
  }

  const removeQuestion = (indexToRemove) => {
    const filteredArray = questionArray.filter((q, index) => indexToRemove !== index);
    setQuestionArray(filteredArray);
    setQuiz({
      ...quiz, questions: questionArray
    });
  }

  const updateQuestion = (indexToUpdate) => {
    const updatedArray = questionArray.map((q, index) => (
        indexToUpdate === index ? currentQuestion : q));
    setQuestionArray(updatedArray);
    setCurrentQuestion(blankQuestion);
    setQuiz({
      ...quiz, questions: questionArray
    });
  }

  const editQuestion = (indexToEdit) => {
    const questionToEdit = questionArray[indexToEdit];
    setCurrentQuestion(questionToEdit);
  }

  const getQuestionType = (type) => {
    switch (type) {
      case "MC":
        return "Multiple choice";
      case "TF":
        return "True/False";
      case "FILL":
        return "Fill In the Blank";
      default:
        return "Other";
    }
  };

  const getAnswers = (type, answers) => {
    const correctAnswers = answers.filter((ans) => ans.isCorrect === "true")
    return correctAnswers.reduce(
        (acc, curValue) => `${acc}${curValue.option}, `,
        ""
    );
    // switch (type) {
    //   case "MC":
    //     const mcAnswers = answers.filter((ans) => ans.isCorrect === "true")
    //     return mcAnswers.reduce(
    //         (acc, curValue) => `${acc}${curValue.option}, `,
    //         ""
    //     );
    //   case "TF":
    //     return answers;
    //   case "FILL":
    //     return answers.reduce(
    //         (acc, curValue) => `${acc}${curValue}, `,
    //         ""
    //     );
    //   default:
    //     return "N/A";
    // }
  };

  const getPossibleAnswers = (answers) => {
    return (
        <></>
    );
  }

  return (quiz &&
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4>Question Editor: </h4>
            <label htmlFor="qPoints">Points: </label>
            <input id="qPoints"
                   className="form-control w-25"
                   value={currentQuestion.points}
                   type="number"
                   onChange={(e) => {
                     setCurrentQuestion(
                         {...currentQuestion, points: e.target.value});
                   }}/>
            <label htmlFor="qType">Question Type: </label>
            <select id="qType"
                    className="form-control"
                    value={currentQuestion.type}
                    onChange={(e) => {
                      setCurrentQuestion(
                          {...currentQuestion, type: e.target.value});
                    }}>
              <option selected value="MC">Multiple choice</option>
              <option value="TF">True/False</option>
              <option value="FILL">Fill In the Blank</option>
            </select>
            <label htmlFor="qPrompt">Question: </label>
            <input id="qPrompt"
                   className="form-control"
                   value={currentQuestion.prompt}
                   onChange={(e) => {
                     setCurrentQuestion(
                         {...currentQuestion, prompt: e.target.value});
                   }}/>
            <h6>Possible Answers: </h6>
            {currentQuestion.answers.map((ans, index) => (
               <div>
                 Correct:
                 <input type="checkbox" />
                 <h6>{ans.option}</h6>
               </div>
            ))}
            <button className="btn btn-primary"
                    onClick={() => {
                      updateQuestion(currentIndex);
                      setCurrentIndex(-1);
                    }}>
              Update
            </button>
            <button className="btn btn-success"
                    onClick={addQuestion}>
              Add
            </button>
          </div>
        </div>
        <br />
        <h4>Current Questions: </h4>
        <ul className="list-group">
          {questionArray.map((q, index) => (
              <li key={index}
                  className="list-group-item">
                <div>
                  <label>Points: </label>
                  <input className="form-control w-25"
                         value={q.points}
                         readOnly />
                  <label>Question Type: </label>
                  <input className="form-control w-25"
                         value={getQuestionType(q.type)}
                         readOnly />
                  <br />
                </div>
                <div>
                  <h6>Question: {q.prompt}</h6>
                </div>
                <div>
                  <h6>Answer: {getAnswers(q.type, q.answers)}</h6>
                </div>
                <div>
                  <button className="btn btn-warning"
                          onClick={() => {
                            setCurrentIndex(index);
                            editQuestion(index);
                          }}>
                    Edit
                  </button>
                  <button className="btn btn-danger"
                          onClick={() => removeQuestion(index)}>
                    Remove
                  </button>
                  {/*<pre>{JSON.stringify(q)}</pre>*/}
                </div>
              </li>
            ))}
        </ul>

        {/*<h6>{quiz.name}</h6>*/}
        {/*<h6>{quiz.isPublished}</h6>*/}
      </div>
  );
}

export default QuizQuestionsEditor;