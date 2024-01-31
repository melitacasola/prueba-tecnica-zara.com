const PodcastDetailsComponent = ({ podcastDetail }) => {
    return (
        <div className="flex flex-col">
            <h2 className="font-semibold">{podcastDetail.trackName}</h2>
            <p className="italic">by {podcastDetail.artistName}</p> 
            
        </div>
    );
}

export default PodcastDetailsComponent