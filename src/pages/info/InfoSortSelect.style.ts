import { SxProps } from '@mui/material';

export const selectContainerStyle: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    midWidth: 120,
};

export const selectStyles: SxProps = {
    border: 'none',
    boxShadow: 'none',
    display: 'flex-end',
    typography: 'body3Medium',
    gap:'8px',
    '.MuiOutlinedInput-notchedOutline': { border: 0 },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 0,
    },
    '& .MuiSelect-select': {
        padding: '16px',
    },
};

export const formControlStyles: SxProps = {
    border: 'none',
    boxShadow: 'none',
};
