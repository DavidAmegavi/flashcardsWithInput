import React from "react";

type typeFlashCard = {
  id: number;
  question: string;
  answer: string;
};

type typeFlashCardProps = {
  flashcard: typeFlashCard;
};

const Flashcard: React.FC<typeFlashCardProps> = ({ flashcard }) => {
  const [inputAnswer, setInputAnswer] = React.useState("");
  const [saveAnswer, setSaveAnswer] = React.useState("");
  const [buttonClick, setButtonClick] = React.useState(true);

  return (
    <div className="card">
      <div className="container">
        <div className="card-body">
          {flashcard.question}
          <form className="answerInput">
            <input
              type="answer"
              className="form-control"
              placeholder="answer"
              value={inputAnswer}
              key={flashcard.id}
              onChange={(event) => {
                setInputAnswer(event.target.value);
                console.log(inputAnswer);
              }}
            ></input>
          </form>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={() => {
          console.log(buttonClick);
          return setButtonClick(false);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Flashcard;
