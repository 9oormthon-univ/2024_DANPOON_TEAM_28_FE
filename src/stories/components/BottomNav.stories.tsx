import { Meta, StoryObj } from '@storybook/react';
import BottomNav from '@/components/BottomNav';
import { MemoryRouter } from 'react-router-dom';
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
                <MemoryRouter initialEntries={['/']}>
                    <Story />
                </MemoryRouter>
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
