import { Meta, StoryObj } from '@storybook/react';
import { IAlertModalProps, ModalContent } from '@/components/AlertModal';

const meta: Meta<
    Pick<
        IAlertModalProps,
        'children' | 'handlePositiveClick' | 'handleNegativeClick'
    >
> = {
    title: 'components/ModalContent',
    component: ModalContent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: '100%',
                    height: '16rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <p>{'Modal Content'}</p>,
    },
};
