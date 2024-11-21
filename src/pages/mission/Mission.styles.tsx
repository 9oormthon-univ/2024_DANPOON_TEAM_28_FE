import { SxProps, Theme } from '@mui/material';

export const missionCardContainerStyle: SxProps<Theme> = {
    minHeight: '4.25rem',
    height: '100%',
    borderRadius: '1rem',
    overflow: 'hidden',
    width: '100%',
};

export const missionCardContentStyle: SxProps = {
    border: '2px solid',
    borderLeft: 'none',
    height: '100%',
    minHeight: '4.25rem',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '0rem 1rem 1rem 0rem',
    px: '1rem',
};

export const iconBadgeStyle: SxProps = {
    width: '3.25rem',
    minHeight: '4.25rem',
    height: '100%',
};
