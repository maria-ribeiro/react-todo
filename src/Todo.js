function Todo(props) {
  return (
    <div className="Todo todo">
      <li>
        {props.text}
      </li>
    </div>
  );
}

export default Todo;