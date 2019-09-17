PRESENTATION LINK: https://docs.google.com/presentation/d/1VhahKb_U-eNWm488M4Ea0u5GgR3-BqnAGB0v5hvW2IU/edit#slide=id.p

1. Create a component: `ToDoItem`

   ```jsx
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

   ```jsx
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

   ```jsx
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

   ```jsx
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
       <ToDoItem task={items[0].task} />
       <ToDoItem task={items[1].task} />
       <ToDoItem task={items[2].task} />
     </tbody>
   </table>;
   ```

5. Go to React Dev Tools, and show them `task` inside the `Props`

6. Inside `ToDoItem.js`, pass props to the component and `console.log` it

   ```jsx
   import React from "react";

   function ToDoItem(props) {
     console.log("[ToDoItem.js] props: ", props)
     ...
   }

   export default ToDoItem;
   ```

7. Replace the task with `props.task`

   ```jsx
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

9. Pass another prop

   ```jsx
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
       <ToDoItem task={items[0].task} priority={items[0].priority} />
       <ToDoItem task={items[1].task} priority={items[1].priority} />
       <ToDoItem task={items[2].task} priority={items[2].priority} />
     </tbody>
   </table>;
   ```

10. Go to React Dev Tools again, and show them `task` and `priority` inside the `Props`

11. Inside `ToDoItem.js`, check the `console.log`

12. Replace `middle` with `props.priority`

    ```jsx
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

13. Update the diagram on the board to show that we are now passing "priority" too.

14. Pass a third prop

    ```jsx
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
          task={items[0].task}
          priority={items[0].priority}
          done={items[0].done}
        />
        <ToDoItem
          task={items[1].task}
          priority={items[0].priority}
          done={items[1].done}
        />
        <ToDoItem
          task={items[2].task}
          priority={items[0].priority}
          done={items[2].done}
        />
      </tbody>
    </table>;
    ```

15. We need the function from `App.js` that makes the status icon dynamic. Cut and paste `statusIcon` into `ToDoItem.js`. Then, call it inside the `className` of the `<i />` tag.

    ```jsx
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

16. Go to React Dev Tools again, and show them `task`, `done` and `priority` inside the `Props`

17. Inside `ToDoItem.js`, check the `console.log`

18. Update the diagram on the board.

19. To avoid repition in our code, do the following: Replace the three props with 1 `item` prop per instance

    ```jsx
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
          <ToDoItem item={items[0]} />
          <ToDoItem item={items[1]} />
          <ToDoItem item={items[2]} />
        </tbody>
      </table>
    );
    ```

20. Show props in the Dev Tools. Show console log. Fix the props in `ToDoItem`

    ```jsx
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

21. Explain why manually making a list is bad. What happens if the list size isn't known? Better to have a dynamic list.

22. In `App.js`, iterate through the array using `.map`. Explain `key`. Show the warning.

    ```jsx
    // Components
    import ToDoItem from "./ToDoItem";

    // Data
    import items from "./data";

    function App() {
      const taskRows = props.items.map(item => <ToDoItem item={item} key={item.task} />);

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

23. Explain Presentational vs Container components from discussion slides.

24. Create a container component: `ToDoList`

    ```jsx
    import React from "react";

    // Components
    import ToDoItem from "./ToDoItem";

    function ToDoList() {
      const taskRows = props.items.map(item => (
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

25. Call `ToDoList.js` in `App.js`

    ```jsx
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

    This will trigger an error `items not defined`.

26. Send `items` to `ToDoList` as props from `App.js`

    ```jsx
    function App() {
      return (
        <div className="rectangle">
          <p className="title">TO DO LIST</p>
          <ToDoList items={items} />
        </div>
      );
    }
    ```

27. Edit `ToDoList`

    ```jsx
    import React from "react";

    // Components
    import ToDoItem from "./ToDoItem";

    function ToDoList(props) {
      const taskRows = props.items.map(item => (
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

28. Update the diagram on the board (App -items-> ToDoList -item-> ToDoItem).

29. Compare the before and after. Highlight how much cleaner and easier to understand and reason about the code is.

30. Show them why having a container `ToDoList` is useful.

    In `App.js`, use the `<ToDoList />` multiple times while passing it different filtered lists

    ```jsx
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
    ```

    Change the items being passed around to `<ToDoList />` to show that we use the same component to display different data.
