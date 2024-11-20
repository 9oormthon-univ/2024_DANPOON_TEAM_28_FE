import { Meta, StoryObj } from '@storybook/react';
import Layout, { ILayoutProps } from '@/layouts/Layout'; // 실제 Layout 경로에 맞게 수정
import { MemoryRouter } from 'react-router-dom';
import { Box } from '@mui/material';

const meta: Meta<ILayoutProps> = {
    title: 'layouts/Layout',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: '자식 컴포넌트',
            control: { disable: true },
        },
        sx: {
            control: { disable: true },
            description: 'MUI의 sx 스타일 객체',
        },
        removePadding: {
            control: { type: 'boolean' },
            description: '패딩 제거 여부',
        },
        removeBottomNavigation: {
            control: { type: 'boolean' },
            description: '하단 네비게이션 제거 여부',
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;

type Story = StoryObj<ILayoutProps>;

const Children = () => (
    <Box sx={{ backgroundColor: '#999999' }} width={'100%'} height={'100vh'} />
);

const Template = (args: ILayoutProps) => (
    <Layout
        {...args}
        sx={{
            minHeight: '100vh',
            backgroundColor: 'background.paper',
            ...args.sx, // 스토리에서 전달된 sx와 병합
        }}
    >
        <Children />
    </Layout>
);

export const Default: Story = {
    render: (args) => <Template {...args} />,
    args: {
        removePadding: false,
        removeBottomNavigation: false,
    },
};

export const RemovePadding: Story = {
    render: (args) => <Template {...args} />,
    args: {
        removePadding: true,
        removeBottomNavigation: false,
    },
};

export const RemoveBottomNavigation: Story = {
    render: (args) => <Template {...args} />,
    args: {
        removePadding: false,
        removeBottomNavigation: true,
    },
};

export const RemoveAll: Story = {
    render: (args) => <Template {...args} />,
    args: {
        removePadding: true,
        removeBottomNavigation: true,
    },
};
