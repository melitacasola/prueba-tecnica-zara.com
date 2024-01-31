const EpisodeTable = ({ episodes }) => {
    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Episodies:Aqui</h2>
            <ul>
                {episodes.map((episode, index) => (
                    <li key={index}>
                        <h3>Title: {episode.title}</h3>
                        <p>Date: {episode.pubDate}</p>
                        <p>Duration: {episode.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EpisodeTable
