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
        >
            {type === 'clover' ? (
                <img
                    src={Clover}
                    aria-hidden
                    style={{ width: '1.5rem', height: '1.5rem' }}
                />
            ) : (
                <Typography sx={{ color: 'white' }} variant={'body3SemiBold'}>
                    MY
                </Typography>
            )}
        </Avatar>
    );
};

export default IconBadge;
