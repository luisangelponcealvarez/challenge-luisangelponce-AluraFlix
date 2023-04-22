import ReactPlayer from "react-player";

function Videos(props) {
  const { title, video } = props.lista;

  return (
    <>
      <h2>{title}</h2>
      <ReactPlayer url={video} controls />
    </>
  );
}

export default Videos;
