import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import TextArea from "./components/textArea";
import ResultBox from "./components/resultBox";
import Commands from "./components/commands";
function App() {
  const [showResult, setShowResult] = useState(false);
  const [text, setText] = useState("");
  const [wordsArr, setWordsArr] = useState<string[]>([]);
  const [stringAsc, setStringAsc] = useState(false);
  const [numberAsc, setNumberAsc] = useState(false);
  const [wordsArrToRender, setWordsArrToRender] = useState<[string, number]>([
    "",
    0,
  ]);
  const handleInput = async (e: any) => {
    e.target.value !== "" && (await setText(e.target.value));
  };

  const renderResult = () => {
    setShowResult(true);
    const newArr: any = wordsArr.map((word) => [
      word,
      countOcurrences(wordsArr, word),
    ]);
    const hashArray: string[] = newArr.map((el: [string, number]) =>
      JSON.stringify(el)
    );
    const hashArrayUniqueSet = new Set<string>(hashArray);
    const hashArrayUnique = [...hashArrayUniqueSet];
    const wordsArrVarUnique: any = hashArrayUnique.map((el) => JSON.parse(el));
    setWordsArrToRender(wordsArrVarUnique);
  };

  const countOcurrences = (arr: string[], element: string) => {
    return arr.reduce((acc, value) => {
      return element === value ? acc + 1 : acc;
    }, 0);
  };

  const sortArray = (order: number) => {
    //0=String
    //1=Numeric
    const tempArr: [string, number] = [...wordsArrToRender];
    order === 0
      ? tempArr.sort((a: any, b: any) => {
          setStringAsc(!stringAsc);
          if (a[0] > b[0]) {
            return stringAsc ? -1 : 1;
          }
          if (b[0] > a[0]) {
            return stringAsc ? 1 : -1;
          }
          return 0;
        })
      : tempArr.sort((a: any, b: any) => {
          console.log("a,b :>> ", a, b);
          setNumberAsc(!numberAsc);
          return numberAsc ? b[1] - a[1] : a[1] - b[1];
        });
    setWordsArrToRender(tempArr);
  };

  const reset = () => {
    setText("");
    setShowResult(false);
  };
  useEffect(() => {
    console.log("text :>> ", text);
    const wordsArrVar: string[] | never[] = text
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>v“”\{\}\[\]\\\/]/gi, " ")
      .split(" ")
      .filter((word) => word !== "")
      .map((word) => word.toLowerCase());
    setWordsArr(wordsArrVar);
  }, [text]);

  return (
    <div className="App">
      <Header />
      <TextArea handleInput={handleInput} text={text} />
      <Commands renderResult={renderResult} reset={reset} text={text} />
      {text.length && showResult ? (
        <ResultBox
          wordsArrToRender={wordsArrToRender}
          sortFunction={sortArray}
          numberAsc={numberAsc}
          stringAsc={stringAsc}
        />
      ) : null}
    </div>
  );
}

export default App;
