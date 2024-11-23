import { Meta, StoryObj } from '@storybook/react';
import SelectedUi from '@/pages/map/SelectedUi';

const meta: Meta = {
    title: 'map/SelectedUi',
    component: SelectedUi,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        lat: 37.5648926,
        lng: 127.0866036,
        placeName: '국립정신건강센터',
        address: '서울특별시 광진구 용마산로 127',
        siteUrl: 'https://www.ncmh.go.kr/ncmh/main.do',
        oneIntro:
            '국립정신건강센터는 정신건강증진을 위한 다양한 프로그램을 운영하고 있습니다.',
    },
};
