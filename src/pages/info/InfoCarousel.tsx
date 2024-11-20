import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import { InfoCarouselData } from '@/constants/infoCarouselData';

import * as style from './InfoCarousel.style';
import CarouselIndicator from '@/components/CarouselIndicator';

interface ICarouselItem {
    title: string;
    description: string;
    image: string;
}

const CarouselItem = ({ title, description, image }: ICarouselItem) => {
    return (
        <Box
            sx={{
                ...style.carouselItemBoxStyle,
                backgroundImage: `url(${image})`,
            }}
        >
            {/* 그라데이션 오버레이 */}
            <Box sx={style.gradientOverlayStyle}/>

            <Box sx={style.textContainerStyle}>
                <Typography sx={style.descriptionTextStyle}>
                    {description}
                </Typography>
                <Typography sx={style.titleTextStyle}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default function InfoCarousel() {
    return (
        <Box sx={style.carouselContainerStyle}>
            <Carousel
                animation="fade"
                interval={4000}
                cycleNavigation={true}
                navButtonsAlwaysInvisible={true}
                indicators={true}
                IndicatorIcon={<CarouselIndicator/>}
                indicatorContainerProps={{
                    style: style.indicatorStyles.container,
                }}
                indicatorIconButtonProps={{
                    style: style.indicatorStyles.default,
                }}
                activeIndicatorIconButtonProps={{
                    style: style.indicatorStyles.active,
                }}
            >
                {InfoCarouselData.map((item, index) => (
                    <CarouselItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </Carousel>
        </Box>
    );
}
