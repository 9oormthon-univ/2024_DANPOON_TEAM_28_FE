import { Meta, StoryObj } from '@storybook/react';
import { ModalContent } from '@/components/AlertModal';

const meta: Meta = {
    title: 'components/AlertModal',
    component: ModalContent,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Modal Content',
    },
};
