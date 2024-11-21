import { Meta, StoryObj } from '@storybook/react';
import CloverMissionPage from '@/pages/mission/clover-mission/CloverMissionPage';

const meta: Meta = {
    title: 'clover-mission/CloverMissionPage',
    component: CloverMissionPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
