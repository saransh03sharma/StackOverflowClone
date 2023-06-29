class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  none = () => {
    const message = this.createChatBotMessage("Sorry, I don't know this question. Kindly try again with different question.", {
      widget: "options",
    });
    this.addMessageToState(message);
   
  };


  handleHTMLQuiz = () => {
    const message = this.createChatBotMessage(
      "HTML stands for Hyper Text Markup Language. Following are commonly asked questions abour HTML.",
      {
        widget: "HTMLQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleCSSQuiz = () => {
    const message = this.createChatBotMessage(
      "CSS stands for Cascading Style Sheet. Following are commonly asked questions abour CSS.",
      {
        widget: "CSSQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Javascript was designed to build dynamic web pages at first. Following are commonly asked questions abour CSS.",
      {
        widget: "JavascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleReactJSQuiz = () => {
    const message = this.createChatBotMessage(
      "React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components. Following are commonly asked questions abour CSS.",
      {
        widget: "ReactJSQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleMERNQuiz = () => {
    const message = this.createChatBotMessage(
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Following are commonly asked questions abour CSS.",
      {
        widget: "MERNQuiz",
      }
    );

    this.addMessageToState(message);
  };
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
