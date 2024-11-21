import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 16px',
    width: '100%',
    boxSizing: 'border-box',
    height: '4.25rem',
};

export const notificationButton: SxProps<Theme> = {
    color: 'livelyPrimary.2',
    height: '1rem',
    padding: 0,
};
