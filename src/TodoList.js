import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="TodoList">
        {props.filteredTodos.map( todo =>
          <Todo
            key={todo.id}
            todo={todo}
            setTodos={props.setTodos}
            todos={props.todos}
          />)
        }
    </div>
  );
}

export default TodoList;
