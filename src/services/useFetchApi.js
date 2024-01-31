export const useFetchApi = async () => {

    try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
            if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.feed.entry;
        
    } catch (error) {
        console.error('Error fetching podcasts:', error);
        return [];
    }
}


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
  // Paso 3: Devolver los datos filtrados
  return filteredPodcasts;
};


export const fetchPodcastDetail = async (podcastId) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://itunes.apple.com/lookup?id=${podcastId}`;

  try {
    const response = await fetch(proxyUrl + url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("quiero saber data:", data);
    return data
  } catch (error) {
    console.error('Error fetching podcast detail:', error);
    return null;
  }
};

// fetchPodcastDetail(1574029840)
//   .then(podcastDetail => {
//     console.log(podcastDetail);
//     // Aquí puedes realizar cualquier operación con el detalle del podcast
//   })
//   .catch(error => {
//     console.error('Error fetching podcast detail:', error);
//   });


// const fetchPodcastFeed = async (feedUrl) => {
//   try {
//     const response = await fetch(feedUrl);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const text = await response.text();
//     // Aquí puedes parsear el texto XML para obtener la información que necesitas
//     // Por simplicidad, en este ejemplo simplemente retornamos el texto sin procesar
//     return text;
//   } catch (error) {
//     console.error('Error fetching podcast feed:', error);
//     return null;
//   }
// };

// const podcastId = 1574029840;

// fetchPodcastDetail(podcastId)
//   .then(podcastDetail => {
//     if (!podcastDetail) {
//       console.error('Podcast detail not found');
//       return;
//     }

//     const { artworkUrl100, trackName, trackCount } = podcastDetail;
//     console.log('Artwork URL:', artworkUrl100);
//     console.log('Title:', trackName);
//     console.log('Number of episodes:', trackCount);

//     // Obtenemos el feed URL
//     const feedUrl = podcastDetail.feedUrl;
//     if (!feedUrl) {
//       console.error('Feed URL not found');
//       return;
//     }

//     // Fetch y procesamiento del feed XML
//     fetchPodcastFeed(feedUrl)
//       .then(feedText => {
//         // Aquí puedes procesar el texto XML del feed como desees
//         console.log('Feed XML:', feedText);
//       })
//       .catch(error => {
//         console.error('Error fetching podcast feed:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error fetching podcast detail:', error);
//   });