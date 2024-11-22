import { Meta, StoryObj } from '@storybook/react';
import MissionContent, {
    IMissionContentProps,
} from '@/pages/mission/missionCard/MissionContent';

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
    },
};
