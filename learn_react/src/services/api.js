const API_KEY = "9b9ad3bb698183dd7e9d4be8b9ca2da0"
const BASE_URL = "https://api.themoviedb.org/3"

export const movieFinder = async () => {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        const data = await response.json()
        return data.results;
}

export const movieSearcher = async (query) => {
    console.log(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results;
}


 