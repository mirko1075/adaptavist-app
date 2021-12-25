import React, { SyntheticEvent } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

interface Props {
  text: string;
  handleInput: Function;
}
export default function TextArea(props: Props) {
  const { handleInput, text } = props;
  return (
    <div className="">
      <Form.Control
        value={text}
        as="textarea"
        placeholder="Write text here..."
        style={{ height: "50vh", width: "50vh" }}
        onChange={(e: SyntheticEvent) => handleInput(e)}
      />
    </div>
  );
}
