import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="colorblue">{props.texto}</button>
    </>
  );
}

export default Button;
