import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="TodoList">
        {props.todos.map( todo => <Todo text={todo}/>)}
    </div>
  );
}

export default TodoList;
