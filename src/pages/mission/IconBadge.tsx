import { Avatar, Typography } from '@mui/material';
import Clover from '@/assets/clover.png';

export interface IIconBadgeProps {
    type: 'clover' | 'my';
    finished: boolean;
}

const IconBadge = ({ type, finished }: IIconBadgeProps) => {
    const backgroundColor = finished
        ? '#bbb'
        : type === 'clover'
          ? 'livelyPrimary.2'
          : 'livelyPrimary.3';
    return (
        <Avatar
            sx={{
                width: '3.25rem',
                height: '4.25rem',
                backgroundColor: backgroundColor,
            }}
            variant={'square'}
            aria-label={type === 'clover' ? '클로버 미션' : '나의 미션'}
        >
            {type === 'clover' ? (
                <img
                    src={Clover}
                    aria-hidden
                    style={{ width: '1.5rem', height: '1.5rem' }}
                />
            ) : (
                <Typography
                    sx={{ color: 'white' }}
                    variant={'body3SemiBold'}
                    aria-hidden
                >
                    MY
                </Typography>
            )}
        </Avatar>
    );
};

export default IconBadge;
