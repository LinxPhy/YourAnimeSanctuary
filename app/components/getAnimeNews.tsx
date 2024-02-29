

const getAnimeNews = async () => {

    const response = await fetch('https://api.jikan.moe/v4/anime/1/news', {
        next: {
            revalidate: 3600
        }
    })
    const data = await response.json()
    return data
}

export default getAnimeNews