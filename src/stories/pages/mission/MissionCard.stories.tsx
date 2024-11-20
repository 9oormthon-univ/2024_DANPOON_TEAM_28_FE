import { Meta, StoryObj } from '@storybook/react';
import MissionCard, { IMissionCardProps } from '@/pages/mission/MissionCard';
import MissionContent from '@/pages/mission/MissionContent';

const meta: Meta<IMissionCardProps> = {
    title: 'mission/MissionCard',
    component: MissionCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'clover',
        children: (
            <MissionContent
                name='미션 이름'
                category='카테고리'
                difficulty={3}
            />
        ),
    },
};
