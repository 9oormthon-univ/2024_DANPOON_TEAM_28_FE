import { Meta, StoryObj } from '@storybook/react';
import Alarm from '@/pages/alarm/Alarm';

const meta: Meta = {
    title: 'Alarm/Alarm',
    component: Alarm,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
