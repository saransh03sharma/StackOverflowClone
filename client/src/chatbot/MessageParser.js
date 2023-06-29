class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    else if (lowercase.includes("html")) {
      this.actionProvider.handleHTMLQuiz();
    }

    else if (lowercase.includes("css")) {
      this.actionProvider.handleCSSQuiz();
    }

    else if (lowercase.includes("javascript")) {
      this.actionProvider.handleJavascriptQuiz();
    }

    else if (lowercase.includes("react")) {
      this.actionProvider.handleReactJSQuiz();
    }

    else if (lowercase.includes("mern")) {
      this.actionProvider.handleMERNQuiz();
    }

    else{
      this.actionProvider.none();
    }
    
  }
}

export default MessageParser;
