import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "HTML",
      handler: props.actionProvider.handleHTMLQuiz,
      id: 1,
    },
    {
      text: "CSS",
      handler: props.actionProvider.handleCSSQuiz,
      id: 2,
    },{
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 3,
    },{
      text: "ReactJS",
      handler: props.actionProvider.handleReactJSQuiz,
      id: 4,
    },{
      text: "MERN",
      handler: props.actionProvider.handleMERNQuiz,
      id: 5,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
