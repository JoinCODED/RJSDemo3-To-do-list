import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {
    const item = this.props.item;
    let statusIcon;

    if (item.done) {
      statusIcon = "fa fa-check-circle";
    } else {
      statusIcon = "fa fa-times-circle";
    }

    return (
      <tr className="row">
        <td>
          <i className={statusIcon} />
        </td>
        <td>{item.task}</td>
        <td className={item.priority}>{item.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
