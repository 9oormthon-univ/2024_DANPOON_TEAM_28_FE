import { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';

const meta: Meta = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: '로고 크기 설정',
        },
        showName: {
            control: 'boolean',
            description: '라이블리 이름 표시 여부',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallWithName: Story = {
    args: {
        size: 'small',
        showName: true,
    },
};

export const LargeWithName: Story = {
    args: {
        size: 'large',
        showName: true,
    },
};

export const SmallLogoOnly: Story = {
    args: {
        size: 'small',
        showName: false,
    },
};

export const MediumLogoOnly: Story = {
    args: {
        size: 'medium',
        showName: false,
    },
};

export const LargeLogoOnly: Story = {
    args: {
        size: 'large',
        showName: false,
    },
};