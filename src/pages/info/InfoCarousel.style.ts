import { SxProps, styled } from '@mui/material';
import { CSSProperties } from 'react';

export const carouselItemBoxStyle: SxProps = {
    position: 'relative',
    width: '90%',
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

export const descriptionTextStyle: SxProps = {
    color: '#FFF',
    fontFamily: 'Pretendard',
    fontSize: 'calc((1.5vw + 0.5rem) * 0.75)',
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: '8px',
    lineHeight: 'calc((1.5vw + 0.5rem) * 0.9)',
};

export const titleTextStyle: SxProps = {
    color: '#FFF',
    fontFamily: 'SB AggroOTF',
    fontSize: 'calc(2vw + 0.6rem)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'calc((1.5vw + 0.5rem) * 1.2)',
    whiteSpace: 'norwrap',
};


export const indicatorStyles = {
    container: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        height:'10px'
    },
    default: {
        width: '8px',
        height: '8px',
        backgroundColor: '#FFF',
    },
    active: {
        backgroundColor: '#8FC966',
    },
};
