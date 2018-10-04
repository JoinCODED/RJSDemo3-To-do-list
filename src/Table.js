import React, { Component } from "react";

import "./App.css";
import tasks from "./data";

import TableRow from "./TableRow";

class Table extends Component {
  render() {
    let taskRow = tasks.map(task => {
      return <TableRow task={task} />;
    });

    return (
      <table className="table">
        <tbody>
          <tr className="headerRow">
            <th>STAT</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          {taskRow}
        </tbody>
      </table>
    );
  }
}
export default Table;
