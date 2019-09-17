PRESENTATION LINK: https://docs.google.com/presentation/d/1VhahKb_U-eNWm488M4Ea0u5GgR3-BqnAGB0v5hvW2IU/edit#slide=id.p

1. Create a component: `ToDoItem`

   ```javascript
   import React from "react";

   function ToDoItem() {
     return (
       <tr>
         <td>
           <i className={"fa fa-check-circle"} />
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

Wondnerful. However, this the `ToDoItem` component is static. How do we make this component dynamic? The magic of props.(Explain props in discussion slides).

4. From the parent component, we can send props to child components through props. Send a different `task` to every instance of the component. These tasks are coming from `data.js` (show them the `data.js` file).

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
     console.log("[ToDoItem.js] props: ", props)
     ...
   }

   export default ToDoItem;
   ```

7. Replace the task with `props.task`

   ```javascript
   import React from "react";

   function ToDoItem(props) {
     console.log("[ToDoItem.js] props: ", props)
     ...
     return (
       <tr>
         <td>
           <i className="fa fa-check-circle" />
         </td>
         <td>{props.task}</td>
         <td className="middle">MIDDLE</td>
       </tr>
     );
   }

   export default ToDoItem;
   ```

8. Draw a diagram on the board (first component tree diagram: App -task-> ToDoItem)

8) Pass another prop

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
       <ToDoItem task={tasks[0].task} priority={tasks[0].priority} />
       <ToDoItem task={tasks[1].task} priority={tasks[1].priority} />
       <ToDoItem task={tasks[2].task} priority={tasks[2].priority} />
     </tbody>
   </table>;
   ```

9. Go to React Dev Tools again, and show them `task` and `priority` inside the `Props`

10. Inside `ToDoItem.js`, check the `console.log`

11. Replace `middle` with `props.priority`

    ```javascript
    function ToDoItem(props) {
      console.log("[ToDoItem.js] props: ", props)
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

12. Update the diagram on the board to show that we are now passing "priority" too.

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
          priority={tasks[0].priority}
          done={task[0].done}
        />
        <ToDoItem
          task={tasks[1].task}
          priority={tasks[0].priority}
          done={task[1].done}
        />
        <ToDoItem
          task={tasks[2].task}
          priority={tasks[0].priority}
          done={task[2].done}
        />
      </tbody>
    </table>;
    ```

14. We need the function from `App.js` that makes the status icon dynamic. Cut and paste `statusIcon` into `ToDoItem.js`. Then, call it inside the `className` of the `<i />` tag.

    ```javascript
    function ToDoItem(props) {
      console.log("[ToDoItem.js] props: ", props)

        const statusIcon = done => {
        if (done) {
          return "fa fa-check-circle";
        } else {
          return "fa fa-times-circle";
        }
      };
      ...
      return (
        <tr>
          <td>
            <i className={statusIcon(props.done)} />
          </td>
          <td>{props.task}</td>
          <td className={props.priority}>{props.priority}</td>
        </tr>
      );
    }
    ```

15. Go to React Dev Tools again, and show them `task`, `done` and `priority` inside the `Props`

16. Inside `ToDoItem.js`, check the `console.log`

17. Update the diagram on the board.

18. To avoid repition in our code, do the following: Replace the three props with 1 task per instance

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
  console.log("[ToDoItem.js] props: ", props)
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

20. In `App.js`, iterate through the array using `.map`. Explain `key`. Show the warning.

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

21. Explain Presentational vs Container components from discussion slides.

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

This will trigger an error `tasks not defined`.

24. Send `tasks` to `ToDoList` as props from `App.js`

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

28. Show them why having a container `ToDoList` is useful.

29. In `App.js`, use the `<ToDoList />` multiple times while passing it different filtered lists

    ```javascript
    function App() {
      const highPriority = items.map(item => item.priority === "high");
      const middlePriority = items.map(item => item.priority === "middle");
      const lowPriority = items.map(item => item.priority === "low");
      return (
        <div className="rectangle">
          <p className="title">TO DO LIST</p>
          <ToDoList tasks={highPriority} />
          <ToDoList tasks={lowPriority} />
        </div>
      );
    }
    ```

    Change the tasks being passed around to `<ToDoList />` to show that we use the same component to display different data.
