function QuizDetailsEditor({quiz, setQuiz}) {
  return (quiz &&
      <div className="container">
        <label for="qName">Quiz Name:</label>
        <input id="qName"
               className="form-control"
               value={quiz.name}
               onChange={(e) => setQuiz({...quiz, name: e.target.value})} />
        <label for="qInstructions">Quiz Instructions:</label>
        <textarea id="qInstructions"
                  className="form-control"
                  value={quiz.instructions}
                  onChange={(e) => setQuiz({...quiz, instructions: e.target.value})} />
        <label for="qPoints">Points: </label>
        <input id="qPoints"
               className="form-control"
               value={quiz.points}
               type="number"
               onChange={(e) => setQuiz({...quiz, points: e.target.value.toString()})} />
        <br />
        <label for="qOptions">Options</label>
        <br />
        <input id="qShuffleAnswersOption"
               type="checkbox" />
        <label for="qShuffleAnswersOption">Shuffle Answers</label>
        <div className="float">
          <input id="qTimeLimitOption"
                 type="checkbox"/>
          <label for="qTimeLimitOption">Time Limit</label>
          <input id="qTimeLimitMinutes"
                 className="form-control"
                 type="number" />
          <label for="qTimeLimitMinutes">Minutes</label>
        </div>
        <br />
        <label for="qDueDate">Due: </label>
        <input id="qDueDate"
               className="form-control"
               type="date"
               value={quiz.dueDate}
               onChange={(e) => setQuiz({...quiz, dueDate: e.target.value})}/>
        <br />
        <label for="qAvailableFrom">Available from: </label>
        <input id="qAvailableFrom"
               className="form-control"
               type="date"
               value={quiz.availableFrom}
               onChange={(e) => setQuiz({...quiz, availableFrom: e.target.value})} />
        <br />
        {/*<h6>{quiz.name}</h6>*/}
        {/*<h6>{quiz.isPublished}</h6>*/}
      </div>
  );
}

export default QuizDetailsEditor;