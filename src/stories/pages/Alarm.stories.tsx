import { Meta, StoryObj } from '@storybook/react';
import Alarm from '@/pages/alarm/Alarm';

const meta: Meta = {
    title: 'Alarm/Alarm',
    component: Alarm,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
            description: '알림 제목',
        },
        subtitle: {
            control: {
                type: 'text',
            },
            description: '알림 부제목',
        },
        pushedAt: {
            control: {
                type: 'text',
            },
            description: '알림이 온 시간',
        },
        type: {
            control: {
                type: 'text',
            },
            description: '알림 타입',
        },
        read: {
            control: {
                type: 'boolean',
            },
            description: '알림을 읽었는지 여부',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: '알림 제목',
        subtitle: '알림 부제목',
        pushedAt: '2021-10-01 12:00:00',
        type: 'challenge',
        read: false,
    },
};
