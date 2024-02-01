const PodcastDetailsComponent = ({ podcastDetail }) => {
    return (
        <div className="p-4">
            <h2 className="font-bold">{podcastDetail.trackName}</h2>
            <p className="italic">by {podcastDetail.artistName}</p> 
        </div>
    );
}

export default PodcastDetailsComponent