import { Meta, StoryObj } from '@storybook/react';
import InfoSortSelect from '@/pages/info/InfoSortSelect';

const meta: Meta = {
  title: 'Info/InfoSortSelect',
  component: InfoSortSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InfoSortSelect>;

export const Primary: Story = {};
