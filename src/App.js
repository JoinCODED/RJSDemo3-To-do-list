import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import ToDoList from "./ToDoList";

// Data
import items from "./data";

function App() {

  const highPriority = items.filter(item => item.priority === "high");
  const middlePriority = items.filter(item => item.priority === "middle");
  const lowPriority = items.filter(item => item.priority === "low");
  
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList items={highPriority} />
      <ToDoList items={lowPriority} />
    </div>
  );
}

export default App;
