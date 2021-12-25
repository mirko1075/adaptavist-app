import React from "react";

interface Props {
  text: string;
  handleInput: Function;
}
export default function textArea(props: Props) {
  const { handleInput, text } = props;
  return (
    <div className="">
      <textarea
        id="inputField"
        onChange={(e) => handleInput(e)}
        rows={10}
        cols={20}
        value={text}
      />
    </div>
  );
}
