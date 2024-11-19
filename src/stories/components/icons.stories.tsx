import { Meta, StoryObj } from '@storybook/react';
import {
    CheckIcon,
    DocsIcon,
    NotificationIcon,
    PersonIcon,
    SearchIcon,
    StatusIcon,
    TrophyIcon,
} from '@/components/Icons';

const meta: Meta = {
    title: 'components/Icons',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Check: Story = {
    args: {
        component: CheckIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Docs: Story = {
    args: {
        component: DocsIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Notification: Story = {
    args: {
        component: NotificationIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Person: Story = {
    args: {
        component: PersonIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Search: Story = {
    args: {
        component: SearchIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Status: Story = {
    args: {
        component: StatusIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Trophy: Story = {
    args: {
        component: TrophyIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};
