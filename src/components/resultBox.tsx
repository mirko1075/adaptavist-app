import React from "react";
import { Table } from "react-bootstrap";
import { FaArrowsAltV, FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {
  wordsArrToRender: [string, number];
  sortFunction: Function;
  numberAsc: boolean;
  stringAsc: boolean;
}
export default function ResultBox(props: Props) {
  const { wordsArrToRender, sortFunction, stringAsc, numberAsc } = props;

  return (
    <div className="result-container">
      <div style={{ marginTop: 15, marginBottom: 15 }}>RESULT</div>
      <Table style={{ width: "25vw" }} responsive="sm" variant="dark" striped>
        <thead>
          <tr>
            <th onClick={() => sortFunction(0)}>
              String {stringAsc ? <FaArrowDown /> : <FaArrowUp />}
            </th>
            <th onClick={() => sortFunction(1)}>
              Ocurrences {numberAsc ? <FaArrowDown /> : <FaArrowUp />}
            </th>
          </tr>
        </thead>
        <tbody>
          {wordsArrToRender.map((element: any, i: number) => {
            return (
              <tr>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
