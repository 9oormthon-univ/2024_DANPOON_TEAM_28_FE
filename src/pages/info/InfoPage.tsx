import { useState } from 'react';
import Layout from '@/layouts/Layout';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import InfoCarousel from './InfoCarousel';
import InfoCategoryTabs from './InfoCategoryTabs';
import InfoSortSelect from './InfoSortSelect';
import InfoTabPanelContent from './InfoTabPanelContent';

const tabLabels = [
    '지원사업',
    '마음챙김',
    '위로의 글',
    '생활습관',
    '방문지 추천',
];

const InfoPage = () => {
    const [selectedTab, setSelectedTab] = useState(0); // 현재 선택된 탭
    const [sortOption, setSortOption] = useState('latest'); // 정렬 옵션

    const handleTabChange = (newTab: number) => {
        setSelectedTab(newTab);
    };

    const handleSortChange = (newSortOption: string) => {
        setSortOption(newSortOption);
    };

    return (
        <Layout>
            <Header />
            <SearchBar page='infoBoard' />
            <InfoCarousel />
            <InfoCategoryTabs
                tabs={tabLabels}
                selectedTab={selectedTab}
                onTabChange={handleTabChange}
            />
            <InfoSortSelect
                sortOption={sortOption}
                onSortChange={handleSortChange}
            />
            <InfoTabPanelContent
                category={tabLabels[selectedTab]}
                sortOption={sortOption}
            />
        </Layout>
    );
};

export default InfoPage;
