
import './App.css';
import SideBar from './components/sideBar/SideBar'
import Banner from './components/banner/Banner'
import { Typography, Box, Grid, Stack, Item } from '@mui/material'
function App() {
  return (
    <div className="App">
      <Box sx={{display:'flex', minHeight:'100vh',Height:'100%'}}>
      <SideBar></SideBar> 
      <Banner></Banner>
      </Box>
    </div>
  );
}

export default App;
