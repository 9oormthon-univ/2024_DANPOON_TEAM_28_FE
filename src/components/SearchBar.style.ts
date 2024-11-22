import { SxProps, Theme } from '@mui/material';

// infoBoard 스타일
export const infoBoardStyle: SxProps<Theme> = {
    display: 'flex',
    width: '100%',
    height: '12vw',
    maxHeight: '5%',
    padding: '9px 12px 9px 16px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '8px',
    flexShrink: 0,
    borderRadius: '30px',
    background: 'var(--2, #478932)',
    boxSizing:'border-box'
};

// mapPage 스타일
export const mapPageStyle: SxProps<Theme> = {
    display: 'flex',
    width: '100%',
    height: '7.5vw',
    maxHeight: '5%',
    padding: '10px 16px 10px 20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '8px',
    flexShrink: 0,
    borderRadius: '30px',
    background: 'var(--Backgrounds-Primary, #FFF)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    boxSizing:'border-box'
};

export const inputBaseStyle: SxProps<Theme> = {
    flex: 1,
    typography: 'body3Medium',
};
