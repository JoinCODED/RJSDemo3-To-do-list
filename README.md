PRESENTATION LINK: https://docs.google.com/presentation/d/1VhahKb_U-eNWm488M4Ea0u5GgR3-BqnAGB0v5hvW2IU/edit#slide=id.p

1. Create a component: ToDoItem
```javascript
import React from "react";

function ToDoItem(props) {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };
  return (
    <tr>
      <td>
        <i className={statusIcon(true)} />
      </td>
      <td>Go to the supermarket</td>
      <td className="middle">MIDDLE</td>
    </tr>
  );
}

export default ToDoItem;

```



1. Create a component: ToDoList

```javascript
import React from "react";

function ToDoList() {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
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
      </tbody>
    </table>
  );
}
export default ToDoList;
```

2. Call component more than one time

```javascript
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </div>
  );
}

export default App;
```

3. Send one prop per component

```javascript
function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList task="Buy Steak" />
      <ToDoList task="Clean your room" />
      <ToDoList task="Solve homework" />
    </div>
  );
}
```

```javascript
function ToDoList(props) {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
    <table className="table">
      <thead>...</thead>
      <tbody>
        <tr>
          ...
          <td>{props.task}</td>
          ...
        </tr>
      </tbody>
    </table>
  );
}
```

4. Send more than one prop

```javascript
function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList task="Buy Steak" done={true} priority="middle"/>
      <ToDoList task="Clean your room" done={false} priority="low"/>
      <ToDoList task="Solve homework" done={true} priority="high"/>
    </div>
  );
}
```

```javascript
function ToDoList(props) {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
    <table className="table">
      <thead>...</thead>
      <tbody>
        <tr>
          <td>
            <i className={statusIcon(props.done)} />
          </td>
          <td>{props.task}</td>
          <td className={props.priority}>
            {props.priority.toUpperCase()}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
```

5. Send all "data" through props. Note that we named our data `toDoItems` when we passed them down to `ToDoList`.

```javascript
import tasks from "./data";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList toDoItems={tasks} />
    </div>
  );
}
```

```javascript
function ToDoList(props) {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
    <table className="table">
      <thead>...</thead>
      <tbody>
        <tr>
          <td>
            <i className={statusIcon(props.toDoItems[0].done)} />
          </td>
          <td>{props.toDoItems[0].task}</td>
          <td className={props.toDoItems[0].priority}>
            {props.toDoItems[0].priority.toUpperCase()}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
```

6. Create a component: ToDoItem. Tell them that you will pass a prop to this component called "toDoItem"

```javascript
import React from "react";

function ToDoItem(props) {
  const statusIcon = done => {
    if (done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };
  return (
    <tr>
      <td>
        <i className={statusIcon(props.toDoItem.done)} />
      </td>
      <td>{props.toDoItem.task}</td>
      <td className={props.toDoItem.priority}>{props.toDoItem.priority.toUpperCase()}</td>
    </tr>
  );
}
export default ToDoItem;
```

7. Call Component TodoItem a few times

```javascript
import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
        </tr>
      </thead>
      <tbody>
        <ToDoItem toDoItem={this.props.toDoItems[0]} />
        <ToDoItem toDoItem={this.props.toDoItems[1]} />
        <ToDoItem toDoItem={this.props.toDoItems[2]} />
      </tbody>
    </table>
  );
}
export default ToDoList;
```

8. Iterate through the array using .map

```javascript
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  let taskRows = props.toDoItems.map(item => (
    <TodoItem toDoItem={item} key={item.task} />
  ));
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
export default ToDoList;
```
