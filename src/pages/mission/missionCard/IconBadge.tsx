import { Avatar, Typography } from '@mui/material';
import Clover from '@/assets/clover.png';
import * as styles from './MissionCard.style';

export interface IIconBadgeProps {
    type: 'clover' | 'my' | 'number';
    finished: boolean;
    number?: number;
}

const IconBadge = ({ type, finished, number }: IIconBadgeProps) => {
    const backgroundColor =
        type === 'clover'
            ? 'livelyPrimary.2'
            : finished
              ? '#bbb'
              : 'livelyPrimary.3';

    return (
        <Avatar
            sx={{
                ...styles.iconBadgeStyle,
                backgroundColor: backgroundColor,
            }}
            variant={'square'}
            aria-label={type === 'my' ? '나의 미션' : '클로버 미션'}
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
                    {number ? number : 'MY'}
                </Typography>
            )}
        </Avatar>
    );
};

export default IconBadge;
