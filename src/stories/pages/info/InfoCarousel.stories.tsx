import { Meta, StoryObj } from '@storybook/react';
import InfoCarousel from '@/pages/info/InfoCarousel';

const meta: Meta = {
    title: 'Info/InfoCarousel',
    component: InfoCarousel,
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
