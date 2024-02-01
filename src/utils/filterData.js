export const filterData = (data, searchParam) => {
    if (!searchParam) {
      return data; // No hay término de búsqueda, devolver todos los datos
    }

    // paso el search a minuscul pa comparar
    const searchTermLowerCase = searchParam.toLowerCase();

    // Filtrar los podcasts con nombre y autor de ... searchparams
    const filteredPodcasts = data.filter(entry => {
        const podcastFilter = entry['im:name'].label.toLowerCase() || entry['im:artist'].label.toLowerCase();
        
        return podcastFilter.includes(searchTermLowerCase);
    });

    console.log('Datos filtrados:', filteredPodcasts);
    
    return filteredPodcasts;
};
