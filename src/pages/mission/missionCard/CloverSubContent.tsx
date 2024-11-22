import { StarIcon, StarOutlinedIcon } from '@/components/Icons';
import { Rating, Stack, Typography } from '@mui/material';

export interface ICloverSubContentCategoryProps {
    category: string;
    difficulty: number;
    finished?: boolean;
}

const CloverSubContentCategory = ({
    category,
    difficulty,
    finished = false,
}: ICloverSubContentCategoryProps) => {
    const color = finished ? '#bbb' : 'livelyPrimary.2';

    return (
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
    );
};

export default CloverSubContentCategory;
