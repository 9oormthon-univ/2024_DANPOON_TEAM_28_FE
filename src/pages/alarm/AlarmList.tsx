import SwipeableAction from '@/components/SwipeableAction';
import { IAlarmProps } from '@/types/IAlarmProps';
import Alarm from './Alarm';
import { Divider, List, Typography } from '@mui/material';
import dayjs from '@/utils/dayjs';
import * as styles from './Alarm.style';

const AlarmList = ({
    timePeriod,
    data,
    filterUnread,
}: {
    timePeriod: '오늘' | '지난 주' | '이전';
    data: Array<IAlarmProps>;
    filterUnread?: boolean;
}) => {
    const today = dayjs();

    return (
        <List
            sx={{
                backgroundColor: 'white',
            }}
            subheader={
                <Typography
                    sx={styles.alarmListSubHeaderStyle}
                    variant={'heading2Light'}
                >
                    {timePeriod}
                </Typography>
            }
        >
            {data.map((alarm: IAlarmProps) => {
                if (filterUnread && alarm.read) {
                    return null;
                }
                let pushedAt: string;
                if (timePeriod === '오늘') {
                    const diff = today.diff(dayjs(alarm.pushedAt), 'h');
                    if (diff < 1) {
                        pushedAt = `${today.diff(
                            dayjs(alarm.pushedAt),
                            'm'
                        )}분 전`;
                    } else {
                        pushedAt = `${diff}시간 전`;
                    }
                } else {
                    pushedAt = dayjs(alarm.pushedAt).format('MM/DD HH:mm');
                }
                return (
                    <>
                        <SwipeableAction
                            onSwipeLeft={() => {
                                console.log('hello!');
                            }}
                            key={alarm.pushedAt}
                        >
                            <Alarm
                                title={alarm.title}
                                subtitle={alarm.subtitle}
                                type={alarm.type}
                                read={alarm.read}
                                pushedAt={pushedAt}
                            />
                        </SwipeableAction>
                        <Divider sx={styles.alarmDividerStyle} />
                    </>
                );
            })}
        </List>
    );
};

export default AlarmList;
