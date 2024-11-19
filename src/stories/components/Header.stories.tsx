import { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/Header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};