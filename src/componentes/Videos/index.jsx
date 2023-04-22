import ReactPlayer from "react-player";
import "./Videos.css";

function Videos(props) {
  const { title, video } = props.lista;

  return (
    <div id="container-videos">
      <h2 className="titulo">{title}</h2>
      <ReactPlayer className="video" url={video} controls />
    </div>
  );
}

export default Videos;
