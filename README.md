PRESENTATION LINK: https://docs.google.com/presentation/d/1VhahKb_U-eNWm488M4Ea0u5GgR3-BqnAGB0v5hvW2IU/edit#slide=id.p

1. Create a component: `ToDoItem`

```javascript
import React from "react";

function ToDoItem() {
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

2. Import then call `ToDoItem` in `App.js`

```javascript
import ToDoItem from "./ToDoItem";

<table>
  <thead>
    <tr>
      <th>STATUS</th>
      <th>TASK</th>
      <th>PRIORITY</th>
    </tr>
  </thead>
  <tbody>
    <ToDoItem />
  </tbody>
</table>;
```

3. Call `ToDoItem` more than one time

```javascript
import ToDoItem from "./ToDoItem";

<table>
  <thead>
    <tr>
      <th>STATUS</th>
      <th>TASK</th>
      <th>PRIORITY</th>
    </tr>
  </thead>
  <tbody>
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
  </tbody>
</table>;
```

4. Explain sending items through props and send a different `task` to every instance of the component

```javascript
import ToDoItem from "./ToDoItem";

<table>
  <thead>
    <tr>
      <th>STATUS</th>
      <th>TASK</th>
      <th>PRIORITY</th>
    </tr>
  </thead>
  <tbody>
    <ToDoItem task="Go to the supermarket" />
    <ToDoItem task="Study for exam" />
    <ToDoItem task="Cook dinner" />
  </tbody>
</table>;
```

5. Go to React Dev Tools, and show them `task` inside the `Props`

6. Inside `ToDoItem.js`, pass props to the component and `console.log` it

```javascript
import React from "react";

function ToDoItem(props) {
  console.log("Inside ToDoItem Component", props)
  ...
}

export default ToDoItem;
```

6. Replace the task with `props.task`

```javascript
import React from "react";

function ToDoItem(props) {
  console.log("Inside ToDoItem Component", props)
  ...
  return (
    <tr>
      <td>
        <i className={statusIcon(true)} />
      </td>
      <td>{props.task}</td>
      <td className="middle">MIDDLE</td>
    </tr>
  );
}

export default ToDoItem;
```

7. Draw a diagram on the board

8. Pass another prop

```javascript
import ToDoItem from "./ToDoItem";

<table>
  <thead>
    <tr>
      <th>STATUS</th>
      <th>TASK</th>
      <th>PRIORITY</th>
    </tr>
  </thead>
  <tbody>
    <ToDoItem task="Go to the supermarket" done={false} />
    <ToDoItem task="Study for exam" done={true} />
    <ToDoItem task="Cook dinner" done={false} />
  </tbody>
</table>;
```

9. Go to React Dev Tools again, and show them `task` and `done` inside the `Props`

10. Inside `ToDoItem.js`, check the `console.log`

11. Replace `true` with `props.true`

```javascript
function ToDoItem(props) {
  console.log("Inside ToDoItem Component", props)
  ...
  return (
    <tr>
      <td>
        <i className={statusIcon(props.done)} />
      </td>
      <td>{props.task}</td>
      <td className="middle">MIDDLE</td>
    </tr>
  );
}
```

12. Pass a third prop

```javascript
import ToDoItem from "./ToDoItem";

<table>
  <thead>
    <tr>
      <th>STATUS</th>
      <th>TASK</th>
      <th>PRIORITY</th>
    </tr>
  </thead>
  <tbody>
    <ToDoItem task="Go to the supermarket" done={false} priority="low" />
    <ToDoItem task="Study for exam" done={true} priority="middle" />
    <ToDoItem task="Cook dinner" done={false} priority="high" />
  </tbody>
</table>;
```

13. Go to React Dev Tools again, and show them `task`, `done` and `priority` inside the `Props`

14. Inside `ToDoItem.js`, check the `console.log`

15. Replace `middle` with `props.priority`

```javascript
function ToDoItem(props) {
  console.log("Inside ToDoItem Component", props)
  ...
  return (
    <tr>
      <td>
        <i className={statusIcon(props.done)} />
      </td>
      <td>{props.task}</td>
      <td className={props.priority}>{props.priority.toUpperCase()}</td>
    </tr>
  );
}
```

16. In `App.js`, import tasks from `data.js` and send as props

```javascript
// Components
import ToDoItem from "./ToDoItem";

// Data
import tasks from "./data";

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
      <ToDoItem
        task={tasks[0].task}
        done={tasks[0].done}
        priority={tasks[0].priority}
      />
      <ToDoItem
        task={tasks[1].task}
        done={tasks[1].done}
        priority={tasks[1].priority}
      />
      <ToDoItem
        task={tasks[2].task}
        done={tasks[2].done}
        priority={tasks[2].priority}
      />
    </tbody>
  </table>
);
```

17. Replace the three props with 1 task per instance

```javascript
// Components
import ToDoItem from "./ToDoItem";

// Data
import tasks from "./data";

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
      <ToDoItem item={tasks[0]} />
      <ToDoItem item={tasks[1]} />
      <ToDoItem item={tasks[2]} />
    </tbody>
  </table>
);
```

18. Fix the props in `ToDoItem`

```javascript
function ToDoItem(props) {
  console.log("Inside ToDoItem Component", props)
  ...
  return (
    <tr>
      <td>
        <i className={statusIcon(props.item.done)} />
      </td>
      <td>{props.item.task}</td>
      <td className={props.item.priority}>{props.item.priority.toUpperCase()}</td>
    </tr>
  );
}
```

19. Iterate through the array using .map

```javascript
// Components
import ToDoItem from "./ToDoItem";

// Data
import tasks from "./data";

function App() {
  const taskRows = tasks.map(item => <ToDoItem item={item} key={item.task} />);
  return (
    ...
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

20. Create a container component: `ToDoList`

```javascript
import React from "react";

// Components
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const taskRows = tasks.map(item => <ToDoItem item={item} key={item.task} />);
  return (
    <table>
      <thead>
        <tr>
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

21. Call `ToDoList.js` in `App.js`

```javascript
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList />
    </div>
  );
}

export default App;
```

22. Send `tasks` to `ToDoList`

```javascript
function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList tasks={tasks} />
    </div>
  );
}
```

23. Edit `ToDoList`

```javascript
import React from "react";

// Components
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const taskRows = props.tasks.map(item => (
    <ToDoItem item={item} key={item.task} />
  ));
  return (
    <table>
      <thead>
        <tr>
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
