import { Meta, StoryObj } from '@storybook/react';
import MissionContent, {
    IMissionContentProps,
} from '@/pages/mission/missonCard/MissionContent';

const meta: Meta<IMissionContentProps> = {
    title: 'mission/MissionContent',
    component: MissionContent,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: {
                type: 'text',
            },
            description: '미션 이름',
        },
        category: {
            control: {
                type: 'text',
            },
            description: '카테고리',
        },
        difficulty: {
            control: {
                type: 'range',
                min: 0,
                max: 3,
                step: 1,
            },
            description: '난이도',
        },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: '미션 이름',
        category: '카테고리',
        difficulty: 3,
    },
};
