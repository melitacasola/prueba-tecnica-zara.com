'use client'

import PodcastDetailCard from "@/app/components/PodcastDetailCard/PodcastDetailCard";
import { fetchPodcastDetail } from "@/services/fetchPodcastDetail";
import { useState, useEffect } from "react";

const Episode = ({ podcastId, episodeIndex }) => {
    const [podcastDetail, setPodcastDetail] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [description, setDescription] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const detail = await fetchPodcastDetail(podcastId);
        
                if (detail && detail.results && detail.results.length > 0 && typeof detail.results[0] === 'object') {
                    setPodcastDetail(detail.results[0]);

                    const feedUrl = detail.results[0].feedUrl; 
                    
                    const response = await fetch(feedUrl);
                    const xmlText = await response.text();

                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                    const descriptionText = xmlDoc.getElementsByTagName('description')[0].textContent;
                    setDescription(descriptionText);
                    const episodeNodes = xmlDoc.getElementsByTagName('item');

                    const episodesArray = Array.from(episodeNodes).map((episodeNode) => {
                        const title = episodeNode.getElementsByTagName('title')[0].textContent;
                        const description = episodeNode.getElementsByTagName('description')[0].textContent;
                        const enclosure = episodeNode.getElementsByTagName('enclosure')[0].getAttribute('url');

                        return { title, description, enclosure };
                    });
                    setEpisodes(episodesArray);
                    console.log('array de episodes, con algunos datos', episodesArray);

                } else {
                    console.error('No se encontraron detalles del podcast o el formato de los datos no es válido');
                }
            } catch (error) {
                console.error('Error fetching podcast detail:', error);
            }
        };
        fetchData();
    }, [podcastId])

    if (!podcastDetail) {
        return <div>Cargando detalle del podcast...</div>;
    }

    const selectedEpisode = episodes[episodeIndex];

    if (!selectedEpisode) {
        return <div>No se encontró ningún episodio para el índice proporcionado.</div>;
    }

    return (
        <div className="flex flex-row ">
            <PodcastDetailCard podcastDetail={podcastDetail} description={description}/>

            <div className="border m-6 shadow p-6 h-min">

                <h1 className="font-bold text-lg py-4">{selectedEpisode.title}</h1>
                <div className="italic text-base" dangerouslySetInnerHTML={{ __html: selectedEpisode.description }}></div>
                <div className="border-b border-gray-300 mx-1 my-2"></div>
                <audio controls className="my-2 py-3 w-full ">
                    <source src={selectedEpisode.enclosure} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default Episode;
