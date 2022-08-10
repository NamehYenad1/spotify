
import './App.css';
import React, { useState } from 'react'
import SideBar from './components/sideBar/SideBar'
import Banner from './components/banner/Banner'
import Main from './components/main/Main'
import Controls from './components/control/Controls'
import { Typography, Box, Grid, Stack, Item } from '@mui/material'
function App() {
  const [activeTab,setActiveTab] = useState(1)
  const updateActiveTab=(id)=>{
    setActiveTab(id)
  }
  return (
    <div className="App">
      <Box sx={{display:'flex', minHeight:'100vh',Height:'100%'}}>
      <SideBar activeTab={activeTab} updateActiveTab={updateActiveTab}></SideBar> 
      <Stack sx={{width:'100%'}} spacing={10}>
      <Banner></Banner>
      {activeTab===1 ? <Main></Main>: <div> not handled </div>}
      <Controls></Controls>
      </Stack>
      </Box>
    </div>
  );
}

export default App;
