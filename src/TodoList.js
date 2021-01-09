import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="TodoList">
      <ul>
        {props.todos.map( todo => <Todo text={todo}/>)}
      </ul>
    </div>
  );
}

export default TodoList;
