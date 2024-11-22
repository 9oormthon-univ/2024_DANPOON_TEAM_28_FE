import { Meta, StoryObj } from '@storybook/react';
import AlertModal, { IAlertModalProps } from '@/components/AlertModal';

const meta: Meta<IAlertModalProps> = {
    title: 'components/AlertModal',
    component: AlertModal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        open: true,
        children: <p>{'Modal Content'}</p>,
        handlePositiveClick: () => {
            alert('Positive Clicked');
        },
        handleNegativeClick: () => {
            alert('Negative Clicked');
        },
    },
};
