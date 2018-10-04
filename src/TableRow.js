import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {
    let statIcon = () => {
      console.log(this.props.task.status);
      return this.props.task.status
        ? "fa fa-check-circle"
        : "fa fa-times-circle";
    };

    let iconColor = () => {
      return this.props.task.status ? { color: "green" } : { color: "red" };
    };

    let taskPriority = () => {
      if (this.props.task.priority === "high") return { color: "red" };
      else if (this.props.task.priority === "medium")
        return { color: "orange" };
      else return { color: "green" };
    };

    return (
      <tr className="row">
        <td>
          <i className={statIcon()} style={iconColor()} />
        </td>
        <td>{this.props.task.task}</td>
        <td style={taskPriority()}>{this.props.task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
