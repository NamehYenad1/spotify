
import './App.css';
import SideBar from './components/sideBar/SideBar'
import { Typography, Box, Grid, Stack, Item } from '@mui/material'
function App() {
  return (
    <div className="App">
      <Box sx={{display:'flex', minHeight:'100vh',Height:'100%'}}>
      <SideBar></SideBar> 
      
      </Box>
    </div>
  );
}

export default App;
