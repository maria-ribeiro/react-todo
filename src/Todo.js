function Todo(props) {
  function handleComplete() {
    props.setTodos(props.todos.map( item => {
      if( item.id === props.todo.id ) {
        return{ ...item, completed: !item.completed };
      } else {
        return item;
      }
    }));
  }

  function handleDelete() {
    props.setTodos(props.todos.filter( item => item.id !== props.todo.id ));
  }

  return (
    <div className="Todo box">
      <div className={`todo-item ${props.todo.completed ? "completed" : "" }`}>
        <button className="completed-btn" onClick={handleComplete}>
          <div className="circle">
            <div className="check-1"></div>
            <div className="check-2"></div>
          </div>
        </button>
        <div className="text">{props.todo.text}</div>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        <div className="cross">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </button>
    </div>
  );
}

export default Todo;