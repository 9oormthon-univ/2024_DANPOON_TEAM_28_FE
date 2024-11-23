import { Meta, StoryObj } from '@storybook/react';
import InfoTabPanelContent from '@/pages/info/InfoTabPanelContent';

const meta: Meta = {
    title: 'Info/InfoTabPanelContent',
    component: InfoTabPanelContent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
