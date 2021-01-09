function Todo(props) {
  return (
    <div className="Todo todo">
     
        <div className="todo-item">
          <button className="completed-btn">
            <span className="circle"></span>
          </button>
          <div className="text">{props.text}</div>
        </div>
        <button className="delete-btn">
          <div className="cross">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </button>  
     
    </div>
  );
}

export default Todo;