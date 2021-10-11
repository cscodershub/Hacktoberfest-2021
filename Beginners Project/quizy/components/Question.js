import PropTypes from "prop-types";
import { useState } from "react";
import { Formik, Field } from "formik";
import ReactHtmlParser from "html-react-parser";

// Styles
import { StyledQuestion } from "./styles/QuizStyles";

// Library Functions
import shuffle from "../lib/shuffle";

// Custom Components
import Flag from "../components/Flag";

export default function Question({
  correct_answer,
  incorrect_answers,
  question,
  incrementScore,
  nextQuestion,
}) {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  // Un-shuffled Answers
  const answers = incorrect_answers.concat(correct_answer);
  // Shuffled Answers
  const shuffledAnswers = shuffle(answers);

  return (
    <StyledQuestion>
      {answered ? <Flag isCorrect={isCorrect} /> : null}
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          setAnswered(true);
          
          if (values.answer[0] === correct_answer) {
            incrementScore();
            setIsCorrect(true);
          } else {
            setIsCorrect(false);
          }

          setTimeout(() => {
            nextQuestion();
          }, 800);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form>
            <h3>{ReactHtmlParser(question)}</h3>
            <div role="group" aria-labelledby="checkbox-group">
              {shuffledAnswers.map((answer) => (
                <label
                  key={answer}
                  className="label"
                  onChange={props.handleSubmit}
                >
                  <Field
                    type="checkbox"
                    className="checkbox"
                    name="answer"
                    value={answer}
                  />
                  {ReactHtmlParser(answer)}
                </label>
              ))}
            </div>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </form>
        )}
      </Formik>
    </StyledQuestion>
  );
}

Question.propTypes = {
  correct_answer: PropTypes.string,
  incorrect_answers: PropTypes.array,
  question: PropTypes.string,
  incrementScore: PropTypes.func,
  nextQuestion: PropTypes.func,
};
