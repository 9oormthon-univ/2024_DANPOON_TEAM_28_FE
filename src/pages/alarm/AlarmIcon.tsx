import {
    DocsIcon,
    MyPageIcon,
    StatusIcon,
    TrophyIcon,
} from '@/components/Icons';
import { Avatar, ListItemAvatar, SxProps } from '@mui/material';
import * as styles from './Alarm.styles';

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
        <ListItemAvatar sx={styles.alarmBackgroundStyle}>
            <Avatar
                variant='circular'
                sx={{
                    backgroundColor: read ? '#eee' : 'livelyPrimary.2', // 라이블리 2
                    ...styles.alarmIconStyle,
                }}
            >
                {icon}
            </Avatar>
        </ListItemAvatar>
    );
};

export default AlarmIcon;
