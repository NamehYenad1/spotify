import { Typography, Box, Grid, Stack,Button } from '@mui/material'
import MultiCarousel from './MultiCarousel'
const Content = (props)=>{
    return(
        <Box sx={{marginBottom:'100px !important'}}> 
            <MultiCarousel items={props.newReleases} title='RELEASED THIS WEEK'></MultiCarousel>
            <MultiCarousel items={props.featuredPlaylists} title='FEATURED PLAYLIST'></MultiCarousel>
        </Box> 
    )
}

export default Content