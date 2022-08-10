import { Typography, Box, Grid, Stack } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Banner=()=>{
return(
    <>
    <Box sx={{ height:'200px', width:'100%', backgroundColor:'primary.secondary'}}> 
    <Stack 
    direction="column"
    justifyContent="center"
    alignItems={{xs:'flex-start',sm:"flex-end"}}
    spacing={1}
    sx={{height:'100%',width:'85%', margin:'0 auto'}}
   >    
        <Typography sx={{fontSize:'30px', color:'white',fontWeight:'bold'}}>Your favourite tunes</Typography>
        <Typography sx={{display:'flex',fontSize:'20px', color:'white',fontWeight:'bold',alignItems:'center'}}>All <WbSunnyIcon></WbSunnyIcon> and all <DarkModeIcon></DarkModeIcon></Typography>
    </Stack>
    </Box>
    </>
)
}

export default Banner