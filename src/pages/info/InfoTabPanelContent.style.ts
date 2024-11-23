import { SxProps, Theme } from '@mui/material';

export const paperStyle: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 한 줄에 2개의 카드
    gap: '1.5rem',
};