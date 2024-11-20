import { Stack, SxProps } from '@mui/material';
import IconBadge from './IconBadge';

export interface IMissionCardProps {
    type: 'clover' | 'my';
    finished: boolean;
    children: React.ReactNode;
    sx?: SxProps;
}

const MissionCard = ({ type, children, finished, sx }: IMissionCardProps) => {
    const borderColor =
        type === 'clover' && finished ? 'livelyPrimary.2' : '#eee';
    return (
        <Stack
            sx={{
                height: '4.25rem',
                borderRadius: '1rem',
                overflow: 'hidden',
                minWidth: '30rem',
            }}
            direction={'row'}
            alignItems={'center'}
        >
            <IconBadge type={type} finished={finished} />
            <Stack
                sx={{
                    border: '2px solid',
                    borderColor: borderColor,
                    borderLeft: 'none',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                    borderRadius: '0rem 1rem 1rem 0rem',
                    pl: '1rem',
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
