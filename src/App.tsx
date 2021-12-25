import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import TextArea from "./components/textArea";
import ResultBox from "./components/resultBox";
function App() {
  const [text, setText] = useState("");
  const [wordsArr, setWordsArr] = useState([]);

  const handleInput = () => {
    setText(text);
    const wordsArrVar: string[] = text.split(" ");
    wordsArrVar.length ? setWordsArr(wordsArrVar) : null;
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
