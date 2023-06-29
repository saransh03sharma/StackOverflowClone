import React, { useState } from "react";

import FlashCard from "./FlashCard";

const Quiz = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

  const currentQuestion = props.questions[questionIndex];

  if (!currentQuestion) {
    return <p>Quiz over.</p>;
  }

  return (
    <div className="container">
    <FlashCard
      question={props.questions[0].question}
      answer={props.questions[0].answer}
      incrementIndex={incrementIndex}
    />
    
    <FlashCard
      question={props.questions[1].question}
      answer={props.questions[1].answer}
      incrementIndex={incrementIndex}
    />
    <FlashCard
      question={props.questions[2].question}
      answer={props.questions[2].answer}
      incrementIndex={incrementIndex}
    />
    <FlashCard
      question={props.questions[3].question}
      answer={props.questions[3].answer}
      incrementIndex={incrementIndex}
    />
    <FlashCard
      question={props.questions[4].question}
      answer={props.questions[4].answer}
      incrementIndex={incrementIndex}
    />
</div>
  );
};

export default Quiz;
