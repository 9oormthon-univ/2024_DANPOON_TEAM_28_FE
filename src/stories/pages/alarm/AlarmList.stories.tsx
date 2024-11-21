import { Meta, StoryObj } from '@storybook/react';
import AlarmList from '@/pages/alarm/AlarmList';
import { IAlarmProps } from '@/types/IAlarmProps';
import dayjs from '@/utils/dayjs';

const meta: Meta = {
    title: 'Alarm/AlarmList',
    component: AlarmList,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        data: {
            control: {
                type: 'object',
            },
            description: '알림 데이터',
        },
        timePeriod: {
            control: {
                selections: ['오늘', '지난 주', '이전'],
            },
            description: '시간대',
        },
        filterUnread: {
            control: {
                type: 'boolean',
            },
            description: '읽지 않은 알림만 보기',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const todayData: Array<IAlarmProps> = [
    {
        title: '읽은 알림 제목',
        subtitle: '읽은 알림 부제목',
        pushedAt: dayjs()
            .subtract(20, 'minute')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
        type: 'challenge',
        read: true,
    },
    {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: dayjs()
            .subtract(1, 'hour')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
        type: 'challenge',
        read: false,
    },
];

const data: Array<IAlarmProps> = [
    {
        title: '읽은 알림 제목',
        subtitle: '읽은 알림 부제목',
        pushedAt: '2021-10-01 12:00:00',
        type: 'challenge',
        read: true,
    },
    {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: '2021-10-01 12:00:00',
        type: 'challenge',
        read: false,
    },
];

export const Today: Story = {
    args: {
        data: todayData,
        timePeriod: '오늘',
        filterUnread: false,
    },
};

export const TodayUnread: Story = {
    args: {
        data: todayData,
        timePeriod: '오늘',
        filterUnread: true,
    },
};

export const LastWeek: Story = {
    args: {
        data,
        timePeriod: '지난 주',
        filterUnread: false,
    },
};

export const Older: Story = {
    args: {
        data,
        timePeriod: '이전',
        filterUnread: false,
    },
};
