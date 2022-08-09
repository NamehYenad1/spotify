import React, { useState } from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography, Box, Grid, Stack,Button } from '@mui/material'
import sideBarItems from './sideBarItems'
const SideBar = () => {
    const [activeTab,setActiveTab] = useState(1)
    const handleNavClick=(id)=> setActiveTab(id)
    return (
        <Box sx={{ width: { xs: '75px', sm: '240px' }, Height: '100%', display: 'flex', flexDirection: 'column', pt:'80px',backgroundColor:'primary.main' }}>
            <Stack direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ pb:'50px'}}
                >
            <Box> 
            <Box sx={{padding:'20px', borderRadius:'50%', border:'1px solid white'}}> 
            <AccountBoxIcon> </AccountBoxIcon>
            </Box>
            </Box>
            <Typography sx={{display:{xs:'none', sm:'block'},color:'white'}}>
                Bob Smith
            </Typography>
            </Stack>
            <Stack 
            direction="column"
            justifyContent="flex-start"
            alignItems={{xs:'center',sm:'flex-start'}}
            spacing={2}>
                {sideBarItems.map((item, index)=>
                {
                    console.log(activeTab)
                    return(
                <>
                    
                    <Button onClick={()=>handleNavClick(item.id)}sx={{color:activeTab===item.id ? 'white' : 'primary.typo', width:'fit-content', pr:0,pl:{xs:'0', sm:'40px'}} }>
                    <Stack direction='row' spacing={{xs:0,sm:3}}>
                        <item.icon></item.icon>
                        <Typography sx={{display:{xs:'none', sm:'block'}}}>
                           {item.text}
                        </Typography>
                        </Stack> 
                    </Button>     
                   
                </>    
                )})  }
                
            </Stack> 

        </Box>
    )


}

export default SideBar

