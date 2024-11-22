import { Box, IconButton } from '@mui/material';
import Logo from './Logo';
import NotificationIcon from './Icons/NotificationIcon';
import * as style from './Header.style';

interface IHeaderProps {
    padding?: boolean;
}

const Header: React.FC<IHeaderProps> = ({
    padding = true,
}: {
    padding?: boolean;
}) => {
    const handleNotificationClick = () => {
        alert('알림 페이지로 이동합니다.');
    };

    return (
        <Box sx={{ ...style.container, px: padding ? '1rem' : 0 }}>
            <Logo size='small' showName={true} />
            <IconButton
                onClick={handleNotificationClick}
                sx={style.notificationButton}
            >
                <NotificationIcon sx={{ fontSize: '1.3rem' }} />
            </IconButton>
        </Box>
    );
};

export default Header;
