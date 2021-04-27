const Display = (props) => {
  return (
    <div className="display">
      <span className="memory">
        m:<b>{props.memory}</b>
      </span>
      <span>{props.value ? props.value : "0"}</span>
    </div>
  );
};

export default Display;
