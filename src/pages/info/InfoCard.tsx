import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ViewCountIcon } from '@/components/Icons';
import * as style from './InfoCard.style';

interface ICardProps {
    title: string;
    date: Date;
    view: number;
    image: string;
    category?: string;
}

export default function InfoCard({
    title = '예시 타이틀',
    date = new Date('2000-01-01'),
    view = 5123,
    image = 'http://via.placeholder.com/640x480',
}: ICardProps) {
    return (
        <Card sx={style.cardStyle}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={style.cardMediaStyle}
            />

            <CardContent sx={style.cardContentStyle}>
                <Typography variant="body3Medium" sx={style.titleStyle}>
                    {title}
                </Typography>
                <Box sx={style.dateViewContainerStyle}>
                <Typography variant="body4Regular">
                    {date.toLocaleDateString()}
                </Typography>

                <Box sx={style.viewCountTextStyle}>
                    <ViewCountIcon style={{ height:'8px', width:'11px'}} />
                    <Typography variant="body4Regular" sx={style.viewCountTextStyle}>
                        {view}
                    </Typography>
                </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
