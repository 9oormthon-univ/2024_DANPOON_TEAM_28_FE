import { Meta, StoryObj } from '@storybook/react';
import UnSelectedUi from '@/pages/map/UnSelectedUi';
import Layout from '@/layouts/Layout';

const meta: Meta = {
    title: 'map/UnSelectedUi',
    component: UnSelectedUi,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Layout
                sx={{
                    backgroundColor: 'lightgrey',
                }}
            >
                <Story />
            </Layout>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
