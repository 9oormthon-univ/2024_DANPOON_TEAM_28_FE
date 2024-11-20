import { StarIcon, StarOutlinedIcon } from '@/components/Icons';
import { Rating, Stack, Typography } from '@mui/material';

export interface IMissionContentProps {
    name: string;
    category: string;
    difficulty: number;
    finished?: boolean;
}

const MissionContent = ({
    name,
    category,
    difficulty,
    finished = false,
}: IMissionContentProps) => {
    const color = finished ? '#bbb' : 'livelyPrimary.2';
    return (
        <Stack
            direction={'column'}
            spacing={0.5}
            alignItems={'flex-start'}
            sx={{ width: '100%' }}
        >
            <Typography variant={'body3Medium'}>{name}</Typography>
            <Stack direction={'row'} spacing={1}>
                <Typography
                    variant={'body3Medium'}
                    sx={{ color: color, verticalAlign: 'middle' }}
                >
                    {`#${category}`}
                </Typography>
                <Rating
                    readOnly
                    defaultValue={difficulty}
                    max={3}
                    icon={<StarIcon fontSize='inherit' />}
                    emptyIcon={<StarOutlinedIcon fontSize='inherit' />}
                    precision={1}
                    sx={{
                        '& .MuiRating-iconFilled': {
                            color: color,
                        },
                        '& .MuiRating-iconHover': {
                            color: color,
                        },
                        fontSize: '1rem',
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default MissionContent;
