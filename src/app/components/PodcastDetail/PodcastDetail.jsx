'use client'
import { fetchPodcastDetail } from "@/services/fetchPodcastDetail";

import { useState, useEffect } from "react";
import PodcastDetailCard from "../PodcastDetailCard/PodcastDetailCard";
import EpisodeSection from "../EpisodeSection/EpisodeSection";

const PodcastDetail = ({podcastId }) => {
    const [podcastDetail, setPodcastDetail] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const detail = await fetchPodcastDetail(podcastId);
                // Verificar si hay resultados y si el primer resultado es un objeto
                if (detail && detail.results && detail.results.length > 0 && typeof detail.results[0] === 'object') {
                    setPodcastDetail(detail.results[0]);
    
                    const feedUrl = detail.results[0].feedUrl; // Acceder a feedUrl aquí
                    console.log(feedUrl)
                    // Obtener el contenido XML del feed URL
                    const response = await fetch(feedUrl);
                    const xmlText = await response.text();

                    // Parsear el XML
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    // accedo a los datos XML utilizando los metdos del DOM
                    const descriptionText = xmlDoc.getElementsByTagName('description')[0].textContent;
                    setDescription(descriptionText);

                    const episodeNodes = xmlDoc.getElementsByTagName('item');

                    const episodesArray = Array.from(episodeNodes).map((episodeNode) => {
                        const title = episodeNode.getElementsByTagName('title')[0].textContent;
                        const duration = Math.floor(parseInt(episodeNode.getElementsByTagName('itunes:duration')[0].textContent) / 60);
                        const pubDateText = episodeNode.getElementsByTagName('pubDate')[0].textContent;
                        const pubDate = new Date(pubDateText);
                        const formattedDate = pubDate.toLocaleDateString()
                        
                        
                        return { title, duration, pubDate: formattedDate };
                    });
                    setEpisodes(episodesArray);

                    
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

    return (
        <div className="flex flex-row">
            <PodcastDetailCard podcastDetail={podcastDetail} description={description}/>
            <EpisodeSection episodes={episodes} />

        </div>
    )

}

export default PodcastDetail