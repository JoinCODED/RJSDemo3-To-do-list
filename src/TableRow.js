import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {
    let statIcon = () => {
      return this.props.item.status
        ? "fa fa-check-circle"
        : "fa fa-times-circle";
    };

    let iconColor = () => {
      return this.props.item.status ? { color: "green" } : { color: "red" };
    };

    let taskPriority = () => {
      if (this.props.item.priority === "high") return { color: "red" };
      else if (this.props.item.priority === "medium")
        return { color: "orange" };
      else return { color: "green" };
    };

    return (
      <tr className="row">
        <td>
          <i className={statIcon()} style={iconColor()} />
        </td>
        <td>{this.props.item.task}</td>
        <td style={taskPriority()}>{this.props.item.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
