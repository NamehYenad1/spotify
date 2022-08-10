import { Typography, Box, Grid, Stack,Button } from '@mui/material'
import MultiCarousel from './MultiCarousel'
const Content = (props)=>{
    return(
        <Stack> 
            <MultiCarousel items={props.newReleases}></MultiCarousel>
            <MultiCarousel items={props.featuredPlaylists}></MultiCarousel>
        </Stack> 
    )
}

export default Content