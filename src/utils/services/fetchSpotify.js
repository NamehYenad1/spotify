import config from '../../config/config'
const featured_playlists_API_URL = 'https://api.spotify.com/v1/browse/featured-playlists'
const new_releases_API_URL = 'https://api.spotify.com/v1/browse/new-releases'
const { REACT_APP_SPOTIFY_NEW_RELEASE_API_KEY, REACT_APP_SPOTIFY_FEATURED_PLAYLISTS_API_KEY } = config

const fetch_config = (key) => {
    return (
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${key}`
            }
        }
    )
}

export const fetch_new_releases = async () => {

    try {
        const response = await fetch(new_releases_API_URL,fetch_config(REACT_APP_SPOTIFY_NEW_RELEASE_API_KEY))
        const new_releases = await response.json()
        return new_releases
    }
    catch (error) {
        console.log(error)
    }
}

export const fetch_featured_playlists = async()=>{
    try {
        const response = await fetch(featured_playlists_API_URL,fetch_config(REACT_APP_SPOTIFY_FEATURED_PLAYLISTS_API_KEY))
        const featured_playlists = await response.json()
        return featured_playlists
    }
    catch (error) {
        console.log(error)
    }
}
