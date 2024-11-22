import type { Meta, StoryObj } from '@storybook/react';
import InfoCategoryTabs from '@/pages/info/InfoCategoryTabs';

const meta: Meta = {
    title: 'Info/InfoCategoryTabs',
    component: InfoCategoryTabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
          default: 'dark',
      },
    },
};

export default meta;

type Story = StoryObj<typeof InfoCategoryTabs>;

export const Primary: Story = {};
