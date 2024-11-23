import { Meta, StoryObj } from '@storybook/react';
import MapPage from '@/map/MapPage';

const meta: Meta = {
    title: 'map/MapPage',
    component: MapPage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
