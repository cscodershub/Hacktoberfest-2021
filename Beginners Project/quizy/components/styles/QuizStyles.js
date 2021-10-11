import styled from "styled-components";

export const FinalScore = styled.p`
  margin: -5px 0;
  color: ${(props) =>
    props.score < 60
      ? "var(--accent-color)"
      : props.score < 80
      ? "var(--warning-color)"
      : "var(--success-color)"};
  font-weight: bold;
  font-size: ${(props) =>
    props.score < 70 ? "3em" : props.score < 90 ? "3.5em" : "4em"};

  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
    -webkit-text-fill-color: ${(props) =>
      props.score < 60
        ? "var(--accent-color)"
        : props.score < 80
        ? "var(--warning-color)"
        : "var(--success-color)"};
  }
`;

export const Title = styled.header`
  min-width: 700px;
  max-width: 700px;
  display: flex;
  margin-bottom: 2em;
  border-radius: 4px;
  border: 1px solid var(--border);
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 1000px) {
    min-width: 98%;
    max-width: 98%;
  }

  .info {
    padding: 1em 0;
    margin: 0 auto;
    text-align: center;
    flex-basis: 2;

    h2 {
      font-size: 2.5em;
      color: var(--tx-color);
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
      -webkit-text-fill-color: ${(props) =>
        props.difficulty == "hard"
          ? "var(--accent-color)"
          : props.difficulty == "medium"
          ? "var(--warning-color)"
          : "var(--success-color)"};
    }

    h2,
    h3 {
      margin-bottom: 0.75em;
    }
  }

  .difficulty {
    display: grid;
    place-items: center;
    padding: 1em;
    background-color: ${(props) =>
      props.difficulty == "hard"
        ? "var(--accent-color-faded)"
        : props.difficulty == "medium"
        ? "var(--warning-color-faded)"
        : "var(--success-color-faded)"};
  }
`;

export const StyledQuestion = styled.div`
  min-width: 700px;
  max-width: 700px;
  padding: 1em;
  position: relative;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  h3 {
    margin-bottom: 0.5em;
  }

  .label {
    display: block;
    position: relative;
    width: 100%;
    padding: 0.5em;
    padding-left: 1rem;
    margin-bottom: 0.5em;
    user-select: none;
    cursor: pointer;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: linear-gradient(
      135deg,
      rgba(219, 219, 219, 0) 0%,
      rgba(150, 150, 150, 0.25) 100%
    );
  }

  @media (max-width: 1000px) {
    min-width: 98%;
    max-width: 98%;
  }

  .label:hover,
  .label .checkbox:checked ~ .label {
    font-weight: 600;
    color: var(--accent-color);
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(243, 0, 61, 0.25) 100%
    );
  }

  .checkbox {
    display: none;
  }
`;

export const StyledIsCorrect = styled.div`
  width: 2em;
  height: 2em;
  position: absolute;
  display: grid;
  place-items: center;
  top: -1.2em;
  right: 0.2em;
  font-size: 1.5em;
  color: var(--bg-color);
  background-color: ${(props) =>
    props.isCorrect ? "var(--success-color)" : "var(--accent-color)"};
  border-radius: 100%;
`;
