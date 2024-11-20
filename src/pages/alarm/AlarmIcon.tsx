import {
    DocsIcon,
    MyPageIcon,
    StatusIcon,
    TrophyIcon,
} from '@/components/Icons';
import { Avatar, ListItemAvatar, SxProps } from '@mui/material';

const AlarmIcon = ({ type, read }: { type: string; read: boolean }) => {
    let icon: null | React.ReactNode = null;

    const style: SxProps = {
        color: read ? '#999' : 'livelyPrimary.4', // 라이블리 4
    };
    if (type === 'challenge') {
        icon = <TrophyIcon sx={style} />;
    } else if (type === 'docs') {
        icon = <DocsIcon sx={style} />;
    } else if (type === 'status') {
        icon = <StatusIcon sx={style} />;
    } else if (type === 'test') {
        icon = <MyPageIcon sx={style} />;
    }

    return (
        <ListItemAvatar
            sx={{
                width: '4rem',
                height: '3rem',
            }}
        >
            <Avatar
                variant='circular'
                sx={{
                    backgroundColor: read ? '#eee' : 'livelyPrimary.2', // 라이블리 2
                    width: '3rem',
                    height: '3rem',
                }}
            >
                {icon}
            </Avatar>
        </ListItemAvatar>
    );
};

export default AlarmIcon;
