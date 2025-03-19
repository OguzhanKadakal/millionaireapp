import React, { use, useState } from "react";
import "./app.css";
import Trivia from "./component/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the best youtube channel?",
      answers: [
        { text: "Lama Dev", correct: false },
        { text: "Web Dev Simplified", correct: true },
        { text: "Traversy Media", correct: false },
        { text: "Dev Ed", correct: false },
      ],
    },
    {
      id: 2,
      question:
        "Which programming language is primarily used for web development?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false },
      ],
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style System", correct: false },
        { text: "Colorful Style Syntax", correct: false },
      ],
    },
  ];
  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1,000" },
    { id: 6, amount: "$ 2,000" },
    { id: 7, amount: "$ 4,000" },
    { id: 8, amount: "$ 8,000" },
    { id: 9, amount: "$ 16,000" },
    { id: 10, amount: "$ 32,000" },
    { id: 11, amount: "$ 64,000" },
    { id: 12, amount: "$ 125,000" },
    { id: 13, amount: "$ 250,000" },
    { id: 14, amount: "$ 500,000" },
    { id: 15, amount: "$ 1,000,000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
                setStop={setStop}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
