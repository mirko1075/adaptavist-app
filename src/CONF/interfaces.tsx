import { StringOcurrenceEl } from "./types";

export interface ResultBoxProps {
  wordsArrToRender: StringOcurrenceEl[];
  sortFunction: Function;
  numberAsc: boolean;
  stringAsc: boolean;
}

export interface TextAreaProps {
  text: string;
  handleInput: Function;
}
