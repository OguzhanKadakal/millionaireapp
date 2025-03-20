import React, { useEffect, useState, useMemo } from "react";
import "./app.css";
import Trivia from "./component/Trivia";
import Timer from "./component/Timer";
import Start from "./component/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
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
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
      ],
    },
    {
      id: 5,
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
        { text: "Jane Austen", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "CO2", correct: false },
        { text: "HO", correct: false },
      ],
    },
    {
      id: 8,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is the smallest prime number?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
      ],
    },
    {
      id: 10,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the square root of 64?",
      answers: [
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which element has the atomic number 1?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Hydrogen", correct: true },
        { text: "Helium", correct: false },
        { text: "Carbon", correct: false },
      ],
    },
    {
      id: 13,
      question: "What is the largest continent by area?",
      answers: [
        { text: "Africa", correct: false },
        { text: "Asia", correct: true },
        { text: "Europe", correct: false },
        { text: "Antarctica", correct: false },
      ],
    },
    {
      id: 14,
      question: "Who discovered gravity?",
      answers: [
        { text: "Albert Einstein", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Nikola Tesla", correct: false },
      ],
    },
    {
      id: 15,
      question: "What is the speed of light in vacuum?",
      answers: [
        { text: "300,000 km/s", correct: true },
        { text: "150,000 km/s", correct: false },
        { text: "450,000 km/s", correct: false },
        { text: "600,000 km/s", correct: false },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
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
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
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
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
