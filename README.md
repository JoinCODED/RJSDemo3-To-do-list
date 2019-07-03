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
    ...
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
    ...
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
    <ToDoItem task={tasks[0].task} />
    <ToDoItem task={tasks[1].task} />
    <ToDoItem task={tasks[2].task} />
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

7. Draw a diagram on the board (first component tree diagram: App -task-> ToDoItem)

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
    <ToDoItem task={tasks[0].task} done={task[0].done} />
    <ToDoItem task={tasks[1].task} done={task[1].done} />
    <ToDoItem task={tasks[2].task} done={task[2].done} />
  </tbody>
</table>;
```

9. Go to React Dev Tools again, and show them `task` and `done` inside the `Props`

10. Inside `ToDoItem.js`, check the `console.log`

11. Update the diagram on the board.

12. Replace `true` with `props.done`

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

13. Pass a third prop

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
    <ToDoItem
      task={tasks[0].task}
      done={task[0].done}
      priority={tasks[0].priority}
    />
    <ToDoItem
      task={tasks[1].task}
      done={task[1].done}
      priority={tasks[1].priority}
    />
    <ToDoItem
      task={tasks[2].task}
      done={task[2].done}
      priority={tasks[2].priority}
    />
  </tbody>
</table>;
```

14. Go to React Dev Tools again, and show them `task`, `done` and `priority` inside the `Props`

15. Inside `ToDoItem.js`, check the `console.log`

16. Update the diagram on the board.

17. Replace `middle` with `props.priority`

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

18. Replace the three props with 1 task per instance

```javascript
// Components
import ToDoItem from "./ToDoItem";

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

18. Show props in the Dev Tools. Show console log. Fix the props in `ToDoItem`

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

19. Explain why manually making a list is bad. What happens if the list size isn't known? Better to have a dynamic list.

20. Iterate through the array using `.map`. Explain `key`. Show the warning.

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

21. Explain Presentational vs Container components.

22. Create a container component: `ToDoList`

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

23. Call `ToDoList.js` in `App.js`

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

24. Send `tasks` to `ToDoList`

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

25. Edit `ToDoList`

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

26. Update the diagram on the board (App -tasks-> ToDoList -item-> ToDoItem).

27. Compare the before and after. Highlight how much cleaner and easier to understand and reason about the code is.
