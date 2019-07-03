import React from "react";

import "./App.css";

function ToDoItem(props) {
  const item = props.item;

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


export default ToDoItem;
