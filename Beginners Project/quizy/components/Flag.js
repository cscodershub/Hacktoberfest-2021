import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

// Styles
import { StyledIsCorrect } from "./styles/QuizStyles";

export default function Incorrect({ isCorrect }) {
  return (
    <StyledIsCorrect isCorrect={isCorrect}>
      {isCorrect ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </StyledIsCorrect>
  );
}

Incorrect.propTypes = {
  isCorrect: PropTypes.bool,
};
