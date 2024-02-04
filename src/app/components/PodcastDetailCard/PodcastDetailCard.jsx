import ImageComponent from "../ImageComponent/ImageComponent"
import PodcastDetailsComponent from "../PodcastDetailsComponent/PodcastDetailsComponent"


const PodcastDetailCard = ({ podcastDetail, description }) => {
    return (
        <section className="mx-8">
            <div className="flex flex-col w-60 border m-6 shadow">
                <ImageComponent src={podcastDetail.artworkUrl100} alt={podcastDetail.trackName}/>
                <div className="border-b border-gray-300 mx-2"></div>
                <PodcastDetailsComponent podcastDetail={podcastDetail} />
                <div className="border-b border-gray-300 mx-2"></div>
                <div className="p-2 text-sm">
                    <h4 className='font-semibold py-1'>Descripcion: </h4>
                    <div className="italic text-xs" dangerouslySetInnerHTML={{ __html:description }}></div>
                    
                </div>
            </div>
        </section>
        
    )
}

export default PodcastDetailCard
