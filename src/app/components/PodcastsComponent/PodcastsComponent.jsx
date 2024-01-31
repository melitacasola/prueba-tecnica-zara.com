'use client'

import React, { useState, useEffect } from 'react';
import { filterData, useFetchApi } from '@/services/useFetchApi';
import Podcast from '../Podcast/Podcast';


const PodcastsComponent = ({query}) => {
    const [podcasts, setPodcasts] = useState([]);
    const filteredPodcasts = filterData(podcasts, query)

    // console.log('filteredPodcasts', filteredPodcasts);
    
    useEffect(() => {

        const getStoredPodcasts = () => {
            const storedPodcasts = localStorage.getItem('podcasts');
            if (storedPodcasts) {
                return JSON.parse(storedPodcasts);
            }
            return [];
        }
        const storedPodcasts = getStoredPodcasts();
        
        // Verificar si han pasado más de 1 día desde la última solicitud
        const lastFetchTime = localStorage.getItem('lastFetchTime');
        const currentTime = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 1 día en milisegundos
        const shouldFetch = !lastFetchTime || currentTime - lastFetchTime > oneDay;

        if (shouldFetch) {
            // aca solicito datos al servicio externo
            const fetchData = async () => {
                const podcastsData = await useFetchApi();
                setPodcasts(podcastsData);
                // Almaceno los podcasts y la marca de tiempo actual
                localStorage.setItem('podcasts', JSON.stringify(podcastsData));
                localStorage.setItem('lastFetchTime', currentTime);
            };
            fetchData()
            
        } else {
            // Utilizar los podcasts almacenados
            setPodcasts(storedPodcasts);
        }
    }, [])


    return (
        <div className='my-18 grid grid-cols-4 gap-8 gap-y-[10rem]'>
            {filteredPodcasts?.map(podcast => (
                <Podcast key={podcast.id.attributes['im:id']} podcast={podcast} />
            ))}
        </div>
    );
};

export default PodcastsComponent;

