import React from "react";
import { Table } from "react-bootstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { StringOcurrenceEl } from "../CONF/types";
import { ResultBoxProps } from "../CONF/interfaces";

export default function ResultBox(props: ResultBoxProps) {
  const { wordsArrToRender, sortFunction, stringAsc, numberAsc } = props;
  return (
    <div className="result-container">
      <div style={{ marginTop: 15, marginBottom: 15 }}>RESULT</div>
      <Table style={{ width: "25vw" }} responsive="sm" variant="dark" striped>
        <thead>
          <tr style={{ border: "1px solid grey" }}>
            <th
              style={{ border: "1px solid grey" }}
              onClick={() => sortFunction(0)}
            >
              String {stringAsc ? <FaArrowDown /> : <FaArrowUp />}
            </th>
            <th
              style={{ border: "1px solid grey" }}
              onClick={() => sortFunction(1)}
            >
              Ocurrences {numberAsc ? <FaArrowDown /> : <FaArrowUp />}
            </th>
          </tr>
        </thead>
        <tbody>
          {wordsArrToRender.map((element: StringOcurrenceEl) => {
            return (
              <tr>
                <td style={{ border: "1px solid grey" }}>{element[0]}</td>
                <td style={{ border: "1px solid grey" }}>{element[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
