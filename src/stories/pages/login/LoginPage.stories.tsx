import { Meta, StoryObj } from '@storybook/react';
import LoginPage from '@/pages/login/LoginPage';

const meta: Meta = {
    title: 'Login/LoginPage',
    component: LoginPage,
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
