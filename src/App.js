import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

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
              <i className={statusIcon(true)} />
            </td>
            <td>Go to the supermarket</td>
            <td className="middle">MIDDLE</td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(false)} />
            </td>
            <td>Study for exam</td>
            <td className="low">LOW</td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(false)} />
            </td>
            <td>Cook dinner</td>
            <td className="high">HIGH</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
