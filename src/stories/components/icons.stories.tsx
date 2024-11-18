import { Meta, StoryObj } from '@storybook/react';
import { NotificationIcon, SearchIcon } from '@/components/Icons';

const meta: Meta = {
    title: 'components/Icons',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Notification: Story = {
    args: {
        component: NotificationIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Search: Story = {
    args: {
        component: SearchIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};
