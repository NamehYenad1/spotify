import { Typography, Box, Grid, Stack,Button } from '@mui/material'
import MultiCarousel from './MultiCarousel'
const Content = (props)=>{
    return(
        <Stack sx={{mb:'100px'}}> 
            <MultiCarousel items={props.newReleases} title='RELEASED THIS WEEK'></MultiCarousel>
            <MultiCarousel items={props.featuredPlaylists} title='FEATURED PLAYLIST'></MultiCarousel>
        </Stack> 
    )
}

export default Content