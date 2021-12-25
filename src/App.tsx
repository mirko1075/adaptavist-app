import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import TextArea from "./components/textArea";
import ResultBox from "./components/resultBox";
function App() {
  const [text, setText] = useState("");
  const handleInput = async () => {
    await setText(text);
    // Initialize the word counter
    let numWords = 0;

    const wordsArr = text.split(" ");
    console.log(wordsArr);
  };

  return (
    <div className="App">
      <Header />
      <TextArea handleInput={handleInput} text={text} />
      <ResultBox wordsArr={wordsArr} />
    </div>
  );
}

export default App;
