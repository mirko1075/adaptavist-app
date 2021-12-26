import React, { SyntheticEvent } from "react";
import { Form } from "react-bootstrap";

import { TextAreaProps } from "../CONF/interfaces";

export default function TextArea(props: TextAreaProps) {
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
