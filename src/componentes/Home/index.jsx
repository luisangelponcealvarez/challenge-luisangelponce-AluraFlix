import Header from "../Header/Header";
import Videos from "../Videos";

function Home(props) {
  const file  = props.file;
  

  return (
    <>
      <Header />
      {file.map((containerVideo, index) => (
        <Videos datos={containerVideo} key={index} />
      ))}
    </>
  );
}

export default Home;
