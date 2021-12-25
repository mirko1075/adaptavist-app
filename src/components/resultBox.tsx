import React, { useEffect, useState } from "react";
import ResultObj from "../DTO/wordsObj";
interface Props {
  wordsArr: string[];
}
export default function ResultBox(props: Props) {
  const { wordsArr } = props;
  const [flatArr, setFlatArr] = useState<string[]>([]);

  const countOcurrences = (arr: string[], element: string) => {
    return arr.reduce((acc, value) => {
      return element === value ? acc + 1 : acc;
    }, 0);
  };

  useEffect(() => {
    const wordsSet = [...new Set(wordsArr)];
    setFlatArr(wordsSet);
  }, [wordsArr]);

  return (
    <div className="result-container">
      <div>RESULT</div>
      <div className="line-container">
        <div className="sort-field">Sort by string</div>
        <div className="sort-field">Sort by ocurrence</div>
      </div>
      <div>
        {flatArr.map((key) => {
          return (
            <div key={key} className="line-container">
              <div>{key}</div>
              <div>{countOcurrences(wordsArr, key)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
