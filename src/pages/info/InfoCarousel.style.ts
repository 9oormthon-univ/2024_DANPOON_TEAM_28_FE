import { SxProps, Theme } from '@mui/material';

export const carouselItemBoxStyle: SxProps = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: '0 auto',
};

export const carouselContainerStyle: SxProps = {
    width: '100%',
    margin: '0 auto',
        marginTop:'5vw'
};

export const gradientOverlayStyle: SxProps = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
        'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
};

export const textContainerStyle: SxProps = {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: 'white',
};

export const descriptionTextStyle: SxProps<Theme> = (theme) => ({
    whiteSpace: 'norwrap',
    marginBottom:'3px',
    [theme.breakpoints.down(360)]: {
        fontSize: '0.7rem',
    },
});

export const titleTextStyle: SxProps<Theme> = (theme) => ({
    whiteSpace: 'norwrap',
    [theme.breakpoints.down(360)]: {
        fontSize: '1rem',
    },
});

export const indicatorStyles = {
    container: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        height: '10px',
    },
    default: {
        width: '6px',
        height: '6px',
        backgroundColor: '#FFF',
    },
    active: {
        backgroundColor: '#8FC966',
    },
};
