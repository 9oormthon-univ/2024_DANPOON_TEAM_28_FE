import { Meta, StoryObj } from '@storybook/react';
import IconBadge, { IIconBadgeProps } from '@/pages/mission/IconBadge';

const meta: Meta<IIconBadgeProps> = {
    title: 'mission/IconBadge',
    component: IconBadge,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CloverMission: Story = {
    args: {
        type: 'clover',
        finished: false,
    },
};

export const MyMission: Story = {
    args: {
        type: 'my',
        finished: false,
    },
};

export const CloverMissionFinished: Story = {
    args: {
        type: 'clover',
        finished: true,
    },
};

export const MyMissionFinished: Story = {
    args: {
        type: 'my',
        finished: true,
    },
};
