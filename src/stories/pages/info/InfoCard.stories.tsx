import { Meta, StoryObj } from '@storybook/react';
import InfoCard from '@/pages/info/InfoCard';

const meta: Meta = {
    title: 'Info/InfoCard',
    component: InfoCard,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
