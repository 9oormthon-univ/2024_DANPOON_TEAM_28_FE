import { IAlarmProps } from '@/types/IAlarmProps';
import dayjs from '@/utils/dayjs';
import { useState } from 'react';
import AlarmList from './AlarmList';
import { Stack } from '@mui/material';
import Layout from '@/layouts/Layout';
import AlarmHeader from './AlarmHeader';

const now = dayjs().utc().format();
const lastWeek = dayjs().subtract(1, 'week').format();
const older = dayjs().subtract(2, 'week').format();

const data: Array<IAlarmProps> = [
    {
        title: '읽은 알림 제목',
        subtitle: '읽은 알림 부제목',
        pushedAt: now,
        type: 'challenge',
        read: true,
    },
    {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: now,
        type: 'challenge',
        read: false,
    },
    {
        title: '읽은 알림 제목',
        subtitle: '알림 부제목',
        pushedAt: lastWeek,
        type: 'challenge',
        read: true,
    },
    {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: lastWeek,
        type: 'challenge',
        read: false,
    },
    {
        title: '읽은 알림 제목',
        subtitle: '알림 부제목',
        pushedAt: older,
        type: 'challenge',
        read: true,
    },
    {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: older,
        type: 'challenge',
        read: false,
    },
];
const AlarmPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [alarmList, setAlarmList] = useState<Array<IAlarmProps>>(data);
    const [filterUnread, setFilterUnread] = useState(false);

    const isPushedToday = (date: string) => {
        if (dayjs(date).isBefore(dayjs().startOf('day'))) {
            return false;
        }
        return true;
    };
    const isPushedLastWeek = (date: string) => {
        if (dayjs(date).isBefore(dayjs().subtract(1, 'week').startOf('day'))) {
            return false;
        }
        return true;
    };

    const todayData: Array<IAlarmProps> = [];
    const lastWeekData: Array<IAlarmProps> = [];
    const olderData: Array<IAlarmProps> = [];

    alarmList.forEach((alarm) => {
        if (isPushedToday(alarm.pushedAt)) {
            todayData.push(alarm);
        } else if (isPushedLastWeek(alarm.pushedAt)) {
            lastWeekData.push(alarm);
        } else {
            olderData.push(alarm);
        }
    });

    const handleFilterUnread = () => {
        setFilterUnread((prev) => !prev);
    };

    return (
        <Layout
            sx={{
                minHeight: '100dvh',
            }}
            removePadding
            removeBottomNavigation
        >
            <AlarmHeader
                filterUnread={filterUnread}
                handleFilterUnread={handleFilterUnread}
            />
            <Stack spacing={6}>
                <AlarmList
                    timePeriod='오늘'
                    data={todayData}
                    filterUnread={filterUnread}
                />
                <AlarmList
                    timePeriod='지난 주'
                    data={lastWeekData}
                    filterUnread={filterUnread}
                />
                <AlarmList
                    timePeriod='이전'
                    data={olderData}
                    filterUnread={filterUnread}
                />
            </Stack>
        </Layout>
    );
};

export default AlarmPage;
