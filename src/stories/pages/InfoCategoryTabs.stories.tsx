// InfoCategoryTabs.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InfoCategoryTabs from '@/pages/info/InfoCategoryTabs';

const meta: Meta= {
  title: 'Info/InfoCategoryTabs',
  component: InfoCategoryTabs,
};

export default meta;

type Story = StoryObj<typeof InfoCategoryTabs>;

export const Primary: Story = {};
