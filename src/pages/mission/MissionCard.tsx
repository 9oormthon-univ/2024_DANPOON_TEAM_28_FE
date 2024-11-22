import { Stack, SxProps, Theme } from '@mui/material';
import IconBadge from '../IconBadge';
import * as styles from './missonCard/Mission.style';

export interface IMissionCardProps {
    type: 'clover' | 'my' | 'number';
    children: React.ReactNode;
    number?: number;
    finished?: boolean;
    sx?: SxProps<Theme>;
}

const MissionCard = ({
    type,
    children,
    number,
    finished = false,
    sx,
}: IMissionCardProps) => {
    const borderColor =
        type === 'clover' && finished ? 'livelyPrimary.2' : '#eee';

    const missionCardContainerStyle = {
        ...styles.missionCardContainerStyle,
        ...sx,
    };
    return (
        <Stack
            sx={missionCardContainerStyle}
            direction={'row'}
            alignItems={'center'}
        >
            <IconBadge type={type} finished={finished} number={number} />
            <Stack
                sx={{
                    ...styles.missionCardContentStyle,
                    borderColor: borderColor,
                }}
                direction={'row'}
                alignItems={'center'}
            >
                {children}
            </Stack>
        </Stack>
    );
};

export default MissionCard;
