const Button = (props) => {
  const btnStyle = `calc-button ${props.bg}`;
  return (
    <div>
      <div
        className={btnStyle}
        style={props.value === "0" ? { width: "90px" } : {}}
      >
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default Button;
