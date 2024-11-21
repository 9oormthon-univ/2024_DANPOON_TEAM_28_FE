import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InfoSortSelect from '@/pages/info/InfoSortSelect';

const meta: Meta = {
  title: 'Info/InfoSortSelect', // Storybook 탐색 패널에서 보이는 이름
  component: InfoSortSelect,
  tags: ['autodocs'], // 자동 문서화를 위한 태그
  argTypes:{
    
  }
};

export default meta;

type Story = StoryObj<typeof InfoSortSelect>;

// 기본 상태의 스토리
export const LatestOrder: Story = {
  args: {
    value:'최신순',
  }
};

// 선택 상태를 초기화한 스토리
export const PopularOrder: Story = {
  args: {
    // 초기 값을 "인기순"으로 설정하기 위해 props를 전달
    value: '인기순',
  },
};
