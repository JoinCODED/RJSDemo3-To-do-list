import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import TodoList from "./TodoList";

// Data
import items from "./data";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <TodoList items={items} />
    </div>
  );
}

export default App;
