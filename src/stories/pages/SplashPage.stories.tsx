import { Meta, StoryObj } from '@storybook/react';
import SplashPage from '@/pages/SplashPage';

const meta: Meta<typeof SplashPage> = {
  title: 'Components/SplashPage',
  component: SplashPage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SplashPage>;

export const Primary: Story = {};
