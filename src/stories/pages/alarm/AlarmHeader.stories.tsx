import { Meta, StoryObj } from '@storybook/react';
import AlarmHeader from '@/pages/alarm/AlarmHeader';
import Layout from '@/layouts/Layout';

const meta: Meta<{
    filterUnread: boolean;
    handleFilterUnread: () => void;
}> = {
    title: 'alarm/AlarmHeader',
    component: AlarmHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    argTypes: {
        filterUnread: {
            control: {
                type: 'boolean',
            },
            description: '읽지 않은 알림만 보기',
        },
        handleFilterUnread: {
            action: 'handleFilterUnread',
            description: '읽지 않은 알림만 보기 토글 핸들러',
        },
    },
    decorators: [
        (Story) => (
            <Layout
                sx={{
                    minHeight: '30vh',
                    width: '100vw',
                }}
                removeBottomNavigation
            >
                <Story />
            </Layout>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
