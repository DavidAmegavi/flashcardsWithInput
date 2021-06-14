import React from "react";

import FlashCard from "../components/Flashcard";
// type FlashCardPrototypeProps = {
//   data: [
//     {
//       id: number;
//       question: string;
//       answer: string;
//     }
//   ];
// };

type typeFlashCardData = {
  id: number;
  question: string;
  answer: string;
};
type FlashCardPrototypeProps = {
  data: typeFlashCardData[];
};

const FlashCardPrototype: React.FC<FlashCardPrototypeProps> = ({ data }) => {
  return (
    <div className="container">
      {data.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashCardPrototype;
