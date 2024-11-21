import { Meta, StoryObj } from '@storybook/react';
import BottomNav from '@/components/BottomNav';
import { Container } from '@mui/material';

const meta: Meta = {
    title: 'Components/BottomNav',
    component: BottomNav,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Container maxWidth={'sm'}>
                <Story />
            </Container>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
