import PodcastDetailCard from "@/app/components/PodcastDetailCard/PodcastDetailCard";
import Episode from "./Episode"

const pageEpisode = ({params}) => {

  return (
    <div>
      <Episode podcastId={params.id} episodeIndex={ params.episodeId}/>
    </div>
  );
}

export default pageEpisode
