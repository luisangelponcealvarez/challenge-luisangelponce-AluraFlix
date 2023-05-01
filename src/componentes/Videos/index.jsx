import ReactPlayer from "react-player";
import "./Videos.css";

function Videos(props) {
  const { titulo, video } = props.datos;

  return (
    <div id="container-videos">
      <h2 className="titulo">{titulo}</h2>
      <ReactPlayer className="video" url={video} controls />
    </div>
  );
}

export default Videos;
