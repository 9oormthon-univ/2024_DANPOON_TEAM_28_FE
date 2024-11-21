import { SxProps } from '@mui/material';

export const modalContentStyle: SxProps = {
    width: 'calc(100vw - 2rem)',
    boxSizing: 'border-box',
    maxWidth: '20.5rem',
    padding: '1.5rem',
    pb: '1.375rem',
    borderRadius: '1.25rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
};

export const buttonStyle: SxProps = {
    borderRadius: '0.625rem',
    width: '100%',
    height: '3rem',
};
