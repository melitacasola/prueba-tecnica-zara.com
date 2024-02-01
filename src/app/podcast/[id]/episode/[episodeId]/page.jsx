import Episode from "./Episode"
import { useRouter } from "next/navigation";

const pageEpisode = ({episode}) => {
  //   const router = useRouter();
  // const { id, pid } = router.query;

  

  return (
    <div>
      {/* <h1>Podcast ID: {id}</h1>
      <h2>Episode PID: {pid}</h2> */}
      {/* Renderizar detalles del episodio aquí */}
      <Episode episode={episode} />
    </div>
  );
}

export default pageEpisode
