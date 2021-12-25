import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import TextArea from "./components/textArea";
import ResultBox from "./components/resultBox";
function App() {
  const [text, setText] = useState("");
  const [wordsArr, setWordsArr] = useState<string[]>([]);
  const handleInput = async (e: any) => {
    await setText(e.target.value);
  };

  useEffect(() => {
    console.log("text :>> ", text);
    const wordsArrVar: string[] | never[] = text
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
      .split(" ");
    setWordsArr(wordsArrVar);
    console.log("wordsArr :>> ", wordsArr);
  }, [text]);

  return (
    <div className="App">
      <Header />
      <TextArea handleInput={handleInput} text={text} />
      <ResultBox wordsArr={wordsArr} />
    </div>
  );
}

export default App;
