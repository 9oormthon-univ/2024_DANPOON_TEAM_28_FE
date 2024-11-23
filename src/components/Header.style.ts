import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0',
    width: '100%',
    boxSizing: 'border-box',
    height: '4.25rem',
    marginTop: '5vw',
};

export const notificationButton: SxProps<Theme> = {
    color: 'livelyPrimary.2',
    height: '100%',
    padding: 0,
};
