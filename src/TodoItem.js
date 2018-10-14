import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {

const item = this.props.item;

    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td>
          <i className={statusIcon(item.done)} />
        </td>
        <td>{item.task}</td>
        <td className={item.priority}>{item.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
