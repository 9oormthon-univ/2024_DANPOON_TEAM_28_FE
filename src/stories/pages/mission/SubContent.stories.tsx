import { Meta, StoryObj } from '@storybook/react';
import SubContent, {
    ISubContentProps,
} from '@/pages/mission/missionCard/SubContent';

const meta: Meta<ISubContentProps> = {
    title: 'mission/SubContent',
    component: SubContent,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['repeat', 'ring'],
            },
            description: '타입',
        },
        content: {
            control: {
                type: 'text',
            },
            description: '내용',
        },
        finished: {
            control: {
                type: 'boolean',
            },
            description: '완료 여부',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Repeat: Story = {
    args: {
        type: 'repeat',
        content: '매주 월요일',
        finished: false,
    },
};

export const Ring: Story = {
    args: {
        type: 'ring',
        content: '16:00',
        finished: false,
    },
};

export const RepeatFinished: Story = {
    args: {
        type: 'repeat',
        content: '매주 월요일',
        finished: true,
    },
};

export const RingFinished: Story = {
    args: {
        type: 'ring',
        content: '16:00',
        finished: true,
    },
};
