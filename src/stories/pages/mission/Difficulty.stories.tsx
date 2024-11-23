import { Meta, StoryObj } from '@storybook/react';
import Difficulty from '@/pages/mission/mission-complete/Difficulty';

const meta: Meta = {
    title: 'mission-complete/Difficulty',
    component: Difficulty,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const level0: Story = {
    args: {
        level: 0,
    },
};

export const level1: Story = {
    args: {
        level: 1,
    },
};

export const level2: Story = {
    args: {
        level: 2,
    },
};
