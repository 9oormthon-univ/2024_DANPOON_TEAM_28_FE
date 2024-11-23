import { SxProps } from '@mui/material';

export const missionImageStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '22.5 / 16.25',
};

export const missionCatchPhraseStyle: SxProps = {
    pt: '1.75rem',
    pb: '2rem',
    px: '1.25rem',
    color: 'livelyPrimary.1',
    '& span': { color: 'livelyPrimary.2' },
    width: '100%',
    boxSizing: 'border-box',
    wordBreak: 'keep-all',
};

export const missionCardContainerStyle: SxProps = {
    width: '100%',
    p: 0,
    borderRadius: '1rem',
};

export const checkIconStyle: SxProps = {
    color: 'livelyPrimary.2',
    fontSize: '1rem',
};

export const addMissionButtonStyle: SxProps = {
    width: '20.375rem',
    height: '2.75rem',
    my: '2.5rem',
    borderRadius: '1.5rem',
    border: '1px solid #999',
    color: '#000',
};
