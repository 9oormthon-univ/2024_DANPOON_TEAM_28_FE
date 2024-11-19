import { Meta, StoryObj } from '@storybook/react';
import { NotificationIcon, SearchIcon, MyPageIcon, MapIcon, TrophyIcon, StatusIcon, DocsIcon } from '@/components/Icons';

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

export const MyPage: Story = {
    args: {
        component: MyPageIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Map: Story = {
    args: {
        component: MapIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Trophy: Story = {
    args: {
        component: TrophyIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Status: Story = {
    args: {
        component: StatusIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Docs: Story = {
    args: {
        component: DocsIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};