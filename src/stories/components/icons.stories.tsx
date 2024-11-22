import { Meta, StoryObj } from '@storybook/react';
import {
    CheckIcon,
    DocsIcon,
    MapIcon,
    NotificationIcon,
    MyPageIcon,
    SearchIcon,
    StatusIcon,
    StarOutlinedIcon,
    StarIcon,
    TrophyIcon,
    ReloadIcon,
    ChevronLeftIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ViewCountIcon,
} from '@/components/Icons';
import RepeatIcon from '@/components/Icons/RepeatIcon';
import ClockIcon from '@/components/Icons/ClockIcon';

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

export const ChevronLeft: Story = {
    args: {
        component: ChevronLeftIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Docs: Story = {
    args: {
        component: DocsIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Map: Story = {
    // 추가된 MapIcon 스토리
    args: {
        component: MapIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Notification: Story = {
    args: {
        component: NotificationIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const MyPage: Story = {
    args: {
        component: MyPageIcon,
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

export const StarOutlined: Story = {
    args: {
        component: StarOutlinedIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Star: Story = {
    args: {
        component: StarIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Trophy: Story = {
    args: {
        component: TrophyIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Reload: Story = {
    args: {
        component: ReloadIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const ChevronUp: Story = {
    args: {
        component: ChevronUpIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const ChevronDown: Story = {
    args: {
        component: ChevronDownIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const ViewCount: Story = {
    args: {
        component: ViewCountIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Repeat: Story = {
    args: {
        component: RepeatIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};

export const Clock: Story = {
    args: {
        component: ClockIcon,
    },
    render: (args) => <args.component sx={{ color: 'primary.main' }} />,
};
