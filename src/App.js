import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Data
import items from "./data";

function App() {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>
          <tr>
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className={statusIcon(items[0].done)} />
            </td>
            <td>{items[0].task}</td>
            <td className={items[0].priority}>
              {items[0].priority.toUpperCase()}
            </td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(items[1].done)} />
            </td>
            <td>{items[1].task}</td>
            <td className={items[1].priority}>
              {items[1].priority.toUpperCase()}
            </td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(items[2].done)} />
            </td>
            <td>{items[2].task}</td>
            <td className={items[2].priority}>
              {items[2].priority.toUpperCase()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
