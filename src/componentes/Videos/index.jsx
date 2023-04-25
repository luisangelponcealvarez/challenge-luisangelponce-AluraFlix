import ReactPlayer from "react-player";
import "./Videos.css";

function Videos(props) {
  const { Title, Video } = props.lista;

  return (
    <div id="container-videos">
      <h2 className="titulo">{Title}</h2>
      <ReactPlayer className="video" url={Video} controls />
    </div>
  );
}

export default Videos;
