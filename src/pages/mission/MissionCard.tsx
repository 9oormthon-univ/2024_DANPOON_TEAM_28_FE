import { Stack, SxProps } from '@mui/material';
import IconBadge from './IconBadge';

export interface IMissionCardProps {
    type: 'clover' | 'my' | 'number';
    children: React.ReactNode;
    number?: number;
    finished?: boolean;
    sx?: SxProps;
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
    return (
        <Stack
            sx={{
                minHeight: '4.25rem',
                height: '100%',
                borderRadius: '1rem',
                overflow: 'hidden',
                width: '100%',
                ...sx,
            }}
            direction={'row'}
            alignItems={'center'}
        >
            <IconBadge type={type} finished={finished} number={number} />
            <Stack
                sx={{
                    border: '2px solid',
                    borderColor: borderColor,
                    borderLeft: 'none',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                    borderRadius: '0rem 1rem 1rem 0rem',
                    px: '1rem',
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
