import { Typography, Box, Grid, Stack, Button } from '@mui/material'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useWindowDimensions from '../../utils/Hooks/useWindowsDimensions';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MultiCarousel = (props) => {
    const { width } = useWindowDimensions();
    return (
        <CarouselProvider
            visibleSlides={width > 1300 ? 5: width > 1030 ? 4 : width > 870 ? 3: width > 630 ? 2 : 1 }
            step={5}
            naturalSlideWidth={150}
            naturalSlideHeight={100}
            infinite
            totalSlides={props.items.length}
        >
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <Slider>
                {props.items.map((item, index) => <Slide index={index}><img style={{ height: '200px', width: '200px' }} src={item.images[0].url}></img></Slide>)}
            </Slider>
        </CarouselProvider>
    )
}

export default MultiCarousel