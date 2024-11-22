import { Meta, StoryObj } from '@storybook/react';
import MissionImage from '@/pages/mission/MissionImage';
import { Container } from '@mui/material';

const meta: Meta = {
    title: 'mission/MissionImage',
    component: MissionImage,
    tags: ['autodocs'],
    decorators: [
        (Story: any) => (
            <Container maxWidth={'sm'}>
                <Story />
            </Container>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const clover1: Story = {
    args: {
        clearedCount: 1,
    },
};

export const clover2: Story = {
    args: {
        clearedCount: 2,
    },
};

export const clover3: Story = {
    args: {
        clearedCount: 3,
    },
};
