import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "ChatBot",
  initialMessages: [
    createChatBotMessage(`Hello! Choose one of the options to search for questions.`, {
      widget: "options",
    }),
  ],
  customStyles: {
    
    botMessageBox: {
      backgroundColor: "#376B7E",
      
      
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "HTMLQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Are the HTML tags and elements the same thing?",
            answer:
              "No. HTML elements are defined by a starting tag, may contain some content and a closing tag.",
            id: 1,
          },
          {
            question: "What are tags and attributes in HTML?",
            answer:
              "Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element.",
            id: 2,
          },
          {
            question: "What are void elements in HTML?",
            answer:
              "HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.",
            id: 3,
          },
          {
            question: "What are the various formatting tags in HTML",
            answer:
              "<b>, <br>, <i>, <u>, <em>, <big> etc.",
            id: 4,
          },
          {
            question: "What is the significance of <head> and <body> tag in HTML?",
            answer:
              "<head> tag provides the information about the document. It should always be enclosed in the <html> tag. ",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "CSSQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What are the CSS frameworks?",
            answer:
              "CSS frameworks are the preplanned libraries which make easy and more standard compliant web page styling. The frequently used CSS frameworks are:Bootstrap, Foundation, Semantic UI etc",
            id: 1,
          },
          {
            question: " What is Embedded Style Sheet?",
            answer:
              "An Embedded style sheet is a CSS style specification method used with HTML. You can embed the entire stylesheet in an HTML document by using the STYLE element.",
            id: 2,
          },
          {
            question: "What is a CSS selector?",
            answer:
              "It is a string that identifies the elements to which a particular declaration apply. It is also referred as a link between the HTML document and the style sheet. It is equivalent of HTML elements.",
            id: 3,
          },
          {
            question: "What are the various formatting tags in HTML",
            answer:
              "The CSS opacity property is used to specify the transparency of an element. In simple word, you can say that it specifies the clarity of the image.",
            id: 4,
          },
          {
            question: "Name the property for controlling the image repetition of the background.",
            answer:
              "The background-repeat property repeats the background image horizontally and vertically. Some images are repeated only horizontally or vertically.",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "JavascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What are the different data types present in javascript?",
            answer:
              "String, Number, BigInt, Boolean, Symbol, Null, Undefined. ",
            id: 1,
          },
          {
            question: "Explain Hoisting in javascript.",
            answer:
              "Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top. This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.",
            id: 2,
          },
          {
            question: "Why do we use the word debugger in javascript?",
            answer:
              "The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. ",
            id: 3,
          },
          {
            question: "Difference between " == " and " === " operators.",
            answer:
              "Both are comparison operators. The difference between both the operators is that "==" is used to compare values whereas, " === " is used to compare both values and types.",
            id: 4,
          },
          {
            question: "Difference between var and let keyword in javascript.",
            answer:
              "The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in 'let' the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared",
            id: 5,
          },
        ],
      },
      
    },
    
    {
      widgetName: "ReactJSQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What are the features of React? ",
            answer:
              "It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding. ",
            id: 1,
          },
          {
            question: "What is JSX?",
            answer:
              "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand.",
            id: 2,
          },
          {
            question: "What do you understand by Virtual DOM? Explain its works.",
            answer:
              "A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React's render function creates a node tree out of the React components.",
            id: 3,
          },
          {
            question: "Why can't browsers read JSX?",
            answer:
              "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
            id: 4,
          },
          {
            question: "What is the purpose of render() in React?",
            answer:
              "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. ",
            id: 5,
          },
        ],
      },
      
    },
    
    {
      widgetName: "MERNQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How does React work?",
            answer:
              "React creates a virtual DOM. When state changes in a component it firstly runs a diffing algorithm, which identifies what has changed in the virtual DOM. ",
            id: 1,
          },
          {
            question: "What is props in React?",
            answer:
              "Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component. ",
            id: 2,
          },
          {
            question: "What is Express.js?",
            answer:
              "Express.js, or simply Express, is a free, open-source, lightweight, and fast backend web application framework for Node.js. It is released as open-source software under the MIT License. It is designed for building single-page, multi-page, and hybrid web applications and APIs.",
            id: 3,
          },
          {
            question: "What is MongoDB ?",
            answer:
              "MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas. It provides easy scalability and is a cross-platform, document-oriented database. MongoDB works on the concept of Collection and Document.",
            id: 4,
          },
          {
            question: "What is Node.js? Where can you use it?",
            answer:
              "Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client's browser. It is used to create server-side web applications. Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model.",
            id: 5,
          },
        ],
      },
      
    },
  ],
};

export default config;
