import { createSvgIcon } from '@mui/material';

const ClockIcon = createSvgIcon(
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none'>
        <path
            d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
        />
        <path
            d='M9 4.20007V9.00007L12.2 10.6001'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
        />
    </svg>,
    'ClockIcon' // Component name
);

export default ClockIcon;
