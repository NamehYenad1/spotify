import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#5434b9',
          secondary:'#f8c8b1',
          typo: '#d1d1d1',
      
        },
        secondary: {
          main: '#f50057',
        },
        customYellow :{
            main: '#D4AF37'
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        }
    },

})

export default theme