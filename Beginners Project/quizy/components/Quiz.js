import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';


// Styles
import { FinalScore, Title } from "./styles/QuizStyles";
import AppStyles from "../styles/App.module.css";

// Library Functions
import shuffle from "../lib/shuffle";

// Custom Components
import Question from "../components/Question";

export default function Quiz({ amount, category, difficulty, setStarted }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [score, setScore] = useState(0);
  const [ confetti, setConfetti] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const { width, height } = useWindowSize();


  // Query URL
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

  function nextQuestion() {
    setQuestionNumber(questionNumber + 1);
  }

  useEffect(() => {
    setConfetti((score / questions.length) * 200)
  }, [score])

  useEffect(() => {
    const fetchData = async () => {
      // Starting fetch
      setLoading(true);
      const result = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(shuffle(data.results));
        })
        .catch((err) => {
          console.error("Error:", err);
          setHasError(false);
        });
      // Done fetching
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <BounceLoader color='#f3db00'   />
      ) : hasError ? (
        <div>Error occured.</div>
      ) : questionNumber < questions.length ? (
        <div className={AppStyles.quizWrapper}>
          <Title difficulty={questions[questionNumber].difficulty}>
            <div className="info">
              <h2>{questions[questionNumber].category}</h2>
              <h3>
                Question {questionNumber + 1} of {questions.length}
              </h3>
            </div>
            <div className="difficulty">
              <p>{questions[questionNumber].difficulty}</p>
            </div>
          </Title>
          <Question
            key={questionNumber}
            correct_answer={questions[questionNumber].correct_answer}
            incorrect_answers={questions[questionNumber].incorrect_answers}
            question={questions[questionNumber].question}
            incrementScore={() => setScore(score + 1)}
            nextQuestion={nextQuestion}
          />
        </div>
      ) : questionNumber >= questions.length ? (
        <div className={AppStyles.endWrapper}>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={confetti}
          />
          <div>
            <h2>All Done!</h2>
            <h3>Here is your final score</h3>
            <FinalScore score={(score / questions.length) * 100}>
              {Math.round((score / questions.length) * 100)}%
            </FinalScore>
            <button
              className={AppStyles.button}
              onClick={() => setStarted(false)}
            >
              Take Another Quiz
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

Quiz.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.number,
  difficulty: PropTypes.string,
  setStarted: PropTypes.func,
};
