import ReactPlayer from "react-player";
import "./Videos.css";

function Videos(props) {
  const { titulo, videos } = props.datos;
  console.log(titulo);
  console.log(videos);
  
  return (
    <div id="container-videos">
      <h2 className="titulo">{titulo}</h2>
      <ReactPlayer className="video" url={videos} controls />
    </div>
  );
}

export default Videos;
