

import { usePathname, useRouter } from 'next/navigation'


const EpisodeTable = ({ episodes }) => {
    const pathname = usePathname();
    const  router  = useRouter();

    const handleDirection = (index)=>{
        router.push(`${pathname}/episode/${index}`) 
    }
    return (
        
            <table className="border shadow m-4">
                <div className="m-5">

                    <thead className="px-4 border-b-[2.5px]">
                        <tr className="px-4 border-b-[2.5px] pt-8">
                            <th className="text-left p-2">Title</th>
                            <th className="text-left p-2">Date</th>
                            <th className="text-left p-2">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        
                        {
                            episodes.map((episode, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="text-sky-600 border-b-2 p-2" onClick={()=>handleDirection(`${index}`)} >{ episode.title }</td>
                            
                                    <td className="border-b-2 text-center p-2">{episode.pubDate}</td>
                                    <td className="border-b-2 text-center p-2">{episode.duration}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </div>
            </table>
        
    );
}

export default EpisodeTable
