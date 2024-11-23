import { SxProps, Theme } from '@mui/material';

export const headerStyle: SxProps<Theme> = {
    width: '100%',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
};

export const chevronLeftIconStyle: SxProps<Theme> = {
    color: 'livelyPrimary.2',
    width: '0.5rem',
    height: '1rem',
};

export const formStyle: SxProps<Theme> = {
    width: '100%',
    maxWidth: '20rem',
};

export const completedMissionStyle: SxProps<Theme> = {
    textAlign: 'center',
    px: '1.5rem',
    backgroundColor: 'livelyPrimary.2',
    color: '#fff',
    marginBottom: '1rem',
    borderRadius: '1.25rem',
    height: '2rem',
};

export const imageUploadButtonStyle: SxProps<Theme> = {
    borderRadius: '50%',
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    marginBottom: '0.75rem',
};

export const defaultImageStyle: SxProps<Theme> = {
    width: '13rem',
    height: '13rem',
    backgroundColor: 'transparent',
};

export const textFieldStyle: SxProps<Theme> = {
    mb: '1.5rem',
    width: '100%',
    maxWidth: '20rem',
    '& label.Mui-focused': {
        color: '#000',
    },
    '& .MuiInput-underline:after': {
        border: 'none',
    },
    '& .MuiOutlinedInput-root': {
        padding: '1.25rem',
        borderRadius: '1rem',
        backgroundColor: 'livelyPrimary.4',
        '& fieldset': {
            border: 'none',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
    '& .MuiInputBase-input': {
        fontFamily: 'Pretendard',
        fontSize: '0.9375rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '1.25rem',
    },
};

export const missionDifficultyLabelStyle: SxProps<Theme> = {
    width: '100%',
    paddingLeft: '0.25rem',
    mb: '0.75rem',
};

export const missionCompleteSaveStyle: SxProps<Theme> = {
    width: '100%',
    mt: '1.5rem',
    mb: '2rem',
    borderRadius: '1.6rem',
};
