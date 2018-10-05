import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import Table from "./Table";

// Data
import items from "./data";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <Table items={items} />
    </div>
  );
}

export default App;
