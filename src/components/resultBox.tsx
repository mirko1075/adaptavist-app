import React from "react";
import ResultObj from "../DTO/wordsObj";
interface Props {
  wordsArr: string[];
}
export default function resultBox(props: Props) {
  const { wordsArr } = props;
  const resultObj = new ResultObj(wordsArr);
  const result = resultObj.getResult();
  return <div>{result}</div>;
}
