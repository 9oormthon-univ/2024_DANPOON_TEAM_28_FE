import { Meta, StoryObj } from '@storybook/react';
import SwipeableAction from '@/components/SwipeableAction';
import { Box } from '@mui/material';

const meta: Meta = {
    title: 'components/SwipeableAction',
    component: SwipeableAction,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    argTypes: {
        children: {
            description: '스와이프 가능한 컴포넌트',
        },
        backgroundComponent: {
            description: '스와이프 배경 컴포넌트, 없으면 빨간색 삭제 네모.',
        },
        onSwipeLeft: {
            description: '왼쪽으로 스와이프 했을 때 실행되는 콜백 함수',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <Box
                sx={{
                    backgroundColor: '#fff',
                    width: '160px',
                    height: '4.5rem',
                }}
            />
        ),
        onSwipeLeft: () => {
            alert('swiped left');
        },
    },
};
