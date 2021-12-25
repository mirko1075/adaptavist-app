import React, { MouseEventHandler } from "react";
interface Props {
  renderResult: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
  text: string;
}
export default function Commands(props: Props) {
  const { renderResult, reset, text } = props;
  return (
    <div>
      <button
        disabled={text === ""}
        className="calculate-button"
        onClick={renderResult}
      >
        Calculate
      </button>
      <button
        disabled={text === ""}
        className="calculate-button"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
