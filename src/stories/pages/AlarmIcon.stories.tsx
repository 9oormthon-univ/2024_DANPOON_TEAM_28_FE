import { Meta, StoryObj } from '@storybook/react';
import AlarmIcon from '@/pages/alarm/AlarmIcon';

const meta: Meta = {
    title: 'alarm/AlarmIcon',
    component: AlarmIcon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    argTypes: {
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

export const Challenge: Story = {
    args: {
        type: 'challenge',
        read: false,
    },
};

export const Docs: Story = {
    args: {
        type: 'docs',
        read: false,
    },
};

export const Status: Story = {
    args: {
        type: 'status',
        read: false,
    },
};

export const Test: Story = {
    args: {
        type: 'test',
        read: false,
    },
};

export const Read: Story = {
    args: {
        type: 'challenge',
        read: true,
    },
};
