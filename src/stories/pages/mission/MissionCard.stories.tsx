import { Meta, StoryObj } from '@storybook/react';
import MissionCard, { IMissionCardProps } from '@/pages/mission/MissionCard';

const meta: Meta<IMissionCardProps> = {
    title: 'mission/MissionCard',
    component: MissionCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CloverMisson: Story = {
    args: {
        type: 'clover',
        children: '이곳에 자식 요소가 들어갑니다',
    },
};

export const MyMission: Story = {
    args: {
        type: 'my',
        children: '이곳에 자식 요소가 들어갑니다',
    },
};

export const CloverMissionFinished: Story = {
    args: {
        type: 'clover',
        children: '이곳에 자식 요소가 들어갑니다',
        finished: true,
    },
};

export const MyMissionFinished: Story = {
    args: {
        type: 'my',
        children: '이곳에 자식 요소가 들어갑니다',
        finished: true,
    },
};
