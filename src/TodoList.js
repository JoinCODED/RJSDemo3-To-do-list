import React from "react";

import "./App.css";

import TodoItem from "./TodoItem";

function TodoList(props) {
  const taskRows = props.items.map(item => {
    return <TodoItem item={item} key={item.task} />;
  });

  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
        </tr>
      </thead>
      <tbody>{taskRows}</tbody>
    </table>
  );
}

export default TodoList;
