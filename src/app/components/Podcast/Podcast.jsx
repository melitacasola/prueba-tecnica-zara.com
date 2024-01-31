import Image from "next/image"
import Link from 'next/link'


const Podcast = ({podcast}) => {

    const { 'im:name': title, 'im:image': images, 'im:artist': artist,  id } = podcast
    const handleClick = () => {
        console.log(`${id.attributes['im:id']}`)
    }
    
    return (
        <div className="shadow-md text-center h-full">
            <Link href={`/podcast/${podcast.id.attributes['im:id']}`} onClick={handleClick}>
            <Image
                className="w-32 h-32 rounded-full mx-auto -m-12"
                src={images[2].label} 
                alt={title.label}
                width={150}
                height={150}
                />
            
            <h6 className="text-lg font-semibold pt-14">{title.label.toUpperCase()}</h6>
            <p className="text-gray-500 p-2 text-xl">Author: {artist.label}</p>
            
        </Link>
        </div>
    )
}

export default Podcast
