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


