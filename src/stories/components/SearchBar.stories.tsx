import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/SearchBar';

const meta: Meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'radio',
      options: ['infoBoard', 'mapPage'],
      description: '검색바가 사용되는 페이지',
    },
    onSearch: {
        action: 'searched',
        description: '검색 이벤트 핸들러',
      },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoBoard: Story = {
  args: {
    page: 'infoBoard',
  },
};

export const MapPage: Story = {
  args: {
    page: 'mapPage',
  },
};