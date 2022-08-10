import { Typography, Box, Grid, Stack, Button } from '@mui/material'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useWindowDimensions from '../../utils/Hooks/useWindowsDimensions';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MultiCarousel = (props) => {
    const { width } = useWindowDimensions();
    return (
        <CarouselProvider
            visibleSlides={width > 1450 ? 4 : width > 1132 ? 3 : width > 870 ? 2 : 1}
            step={5}
            naturalSlideWidth={150}
            naturalSlideHeight={width > 1450 ? 150 : width > 1132 ? 220 : width > 870 ? 200 : 150 }
            infinite
            totalSlides={props.items.length}
           
        >
            <Box sx={{display:'flex', width:'90%', margin:'0 auto',justifyContent:'space-between',  mb:'20px' }}>
                <Typography sx={{color:'primary.typo', fontSize:'17px', fontWeight:'bold'}}> 
                    {props.title}
                </Typography>
                <Box>
                    <ButtonBack style={{
                        background: 'none',
                        color: 'inherit',
                        border: 'none',
                        padding: 0,
                        outline: 'inherit',
                    }}><KeyboardArrowLeftIcon /></ButtonBack>
                    <ButtonNext style={{
                        background: 'none',
                        color: 'inherit',
                        border: 'none',
                        padding: 0,
                        outline: 'inherit',
                    }}><KeyboardArrowRightIcon /></ButtonNext>
                </Box>
                
            </Box>
            <Slider>
                {props.items.map((item, index) => <Slide index={index}>

                    <img style={{ height: '300px', width: '300px' }} src={item.images[0].url}></img>
                    <Typography>
                        {item.name}
                    </Typography>

                </Slide>)}
            </Slider>
        </CarouselProvider>
    )
}

export default MultiCarousel