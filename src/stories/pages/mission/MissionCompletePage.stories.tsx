import { Meta, StoryObj } from '@storybook/react';
import MissionCompletePage from '@/pages/mission/mission-complete/MissionCompletePage';

const meta: Meta = {
    title: 'mission-complete/MissionCompletePage',
    component: MissionCompletePage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
