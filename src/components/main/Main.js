
import { fetch_new_releases, fetch_featured_playlists } from '../../utils/services/fetchSpotify'
import React, { useState, useEffect } from 'react'
import Content from './Content'
const Main = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [featuredPlaylists, setFeaturdPlaylists] = useState([])
    const [newReleases, setNewReleases] = useState([])
    useEffect(()=>{
        const fetch_update = async()=>{
           const data= await Promise.all([fetch_new_releases(), fetch_featured_playlists()])
           console.log(data[0].albums.items)
           setFeaturdPlaylists(data[0].albums.items)
           setNewReleases(data[1].playlists.items)
           setIsLoading(false)
        }
        fetch_update()

    }, [])

    return (
        <>
            {isLoading === true ? <div>loading...</div> : <Content newReleases={newReleases} featuredPlaylists={featuredPlaylists}></Content>}
        </>
    )
}

export default Main