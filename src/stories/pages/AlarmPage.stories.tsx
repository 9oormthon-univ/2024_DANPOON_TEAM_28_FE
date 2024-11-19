import { Meta, StoryObj } from '@storybook/react';
import AlarmPage from '@/pages/alarm/AlarmPage';

const meta: Meta = {
    title: 'Alarm/AlarmPage',
    component: AlarmPage,
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
