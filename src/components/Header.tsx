import React from 'react';
import { Box, IconButton } from '@mui/material';
import Logo from './Logo';
import NotificationIcon from './Icons/NotificationIcon';
import * as style from './Header.style';

const Header: React.FC = () => {
    const handleNotificationClick = () => {
        alert('알림 페이지로 이동합니다.');
    };

    return (
        <Box sx={style.container}>
            <Logo size='small' showName={true} />
            <IconButton onClick={handleNotificationClick}>
                <NotificationIcon />
            </IconButton>
        </Box>
    );
};

export default Header;
