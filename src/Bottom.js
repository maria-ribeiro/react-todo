function Bottom(props) {
  return (
    <div className="Bottom box">
      <div className="count">
        {props.count} items left
      </div>
      <div className="selection">
        <button
          className={`${props.filter === "all" ? "selected" : "" }`}
          onClick={() => props.setFilter("all")}
        >
          All
        </button>
        <button
          className={`${props.filter === "active" ? "selected" : "" }`}
          onClick={() => props.setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${props.filter === "completed" ? "selected" : "" }`}
          onClick={() => props.setFilter("completed")}
        >
          Completed
        </button>  
      </div>
    </div>
  );
}

export default Bottom;
