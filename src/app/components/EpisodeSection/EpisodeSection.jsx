
import EpisodeTable from "../EpisodeTable/EpisodeTable";

const EpisodeSection = ({ episodes }) => {
    return (
        <section>
            <h1 className="text-2xl font-bold">Episodes: {episodes.length}</h1>
            <EpisodeTable episodes={episodes} />
        </section>
    );
};

export default EpisodeSection