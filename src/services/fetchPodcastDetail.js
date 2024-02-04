
export const fetchPodcastDetail = async (podcastId) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://itunes.apple.com/lookup?id=${podcastId}`;

    try {
        const response = await fetch(proxyUrl + url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        return data
    } catch (error) {
        console.error('Error fetching podcast detail:', error);
        return null;
    }
};