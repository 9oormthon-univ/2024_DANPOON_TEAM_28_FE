import { SxProps } from '@mui/material';

export const BottomNavStyle: SxProps = {
    width: '100vw',
    height: '10%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1300,
    paddingTop: '1vh',
    paddingBottom: '1.5vh',
    flexShrink: 0,
    background: '#FFF',
    boxShadow: '',
};

export const BottomNavActionStyle: SxProps = {
    '& .MuiBottomNavigationAction-root .MuiBottomNavigationAction-label': {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Pretendard',
        fontSize: '0.6rem',
        fontStyle: 'normal',
        lineHeight: 'normal',
        marginTop: '8px',
        whiteSpace: 'nowrap',
    },
    '& .MuiBottomNavigationAction-root': {
        color: '#BBBBBB',
        width: '25vw',
        minWidth: '32px',
    },
    '& .MuiBottomNavigationAction-root.Mui-selected': {
        color: '#57873E',
    },
};
