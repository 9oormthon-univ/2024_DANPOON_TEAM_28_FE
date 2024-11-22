import { Meta, StoryObj } from '@storybook/react';
import KakaoLoginBtn from '@/pages/login/KakaoLoginBtn';

const meta: Meta = {
    title: 'Login/KakaoLoginBtn',
    component: KakaoLoginBtn,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onClick: () => alert('카카오 로그인 시도!'),
    },
};
