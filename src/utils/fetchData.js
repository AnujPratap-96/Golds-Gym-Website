export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.ITE_RAPID_API_KEY_EXERCISE,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY_YOUTUBE,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };