import { Meta, StoryObj } from '@storybook/react';
import MissionPage from '@/pages/mission/MissionPage';

const meta: Meta = {
    title: 'mission/MissionPage',
    component: MissionPage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
