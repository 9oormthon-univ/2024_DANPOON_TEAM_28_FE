import { createSvgIcon } from '@mui/material';

const StatusIcon = createSvgIcon(
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='48'
        viewBox='0 0 20 48'
        fill='none'
    >
        <path
            d='M0 36V21'
            stroke='currentColor'
            strokeOpacity='1'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M7.99988 36V15.75'
            stroke='currentColor'
            strokeOpacity='1'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>,
    'StatusIcon'
);

export default StatusIcon;
