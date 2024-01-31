import ImageComponent from "../ImageComponent/ImageComponent"
import PodcastDetailsComponent from "../PodcastDetailsComponent/PodcastDetailsComponent"


const PodcastDetailCard = ({ podcastDetail, description }) => {
    return (
        
        <section>
            <div className="flex flex-col w-80">
                <ImageComponent src={podcastDetail.artworkUrl100} alt={podcastDetail.trackName}/>
                <PodcastDetailsComponent podcastDetail={podcastDetail} />
                <h4>Descripcion</h4>
                <p className="text-xs italic">{description}</p>
            </div>
        </section>
        
    )
}

export default PodcastDetailCard
