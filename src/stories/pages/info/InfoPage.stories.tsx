import { Meta, StoryObj } from '@storybook/react';
import InfoPage from '@/pages/info/InfoPage';

const meta: Meta = {
    title: 'Info/InfoPage',
    component: InfoPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
