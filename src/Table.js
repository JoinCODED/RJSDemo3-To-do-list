import React, { Component } from "react";

import "./App.css";

import TableRow from "./TableRow";

class Table extends Component {
  render() {
    let taskRows = this.props.items.map(item => {
      return <TableRow item={item} key={item.task} />;
    });

    return (
      <table className="table">
        <tbody>
          <tr className="headerRow">
            <th>STAT</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          {taskRows}
        </tbody>
      </table>
    );
  }
}
export default Table;
