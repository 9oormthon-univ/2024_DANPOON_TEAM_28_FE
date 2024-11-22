import InfoCard from './InfoCard';
import { infoCardsData } from '@/constants/infoCardsData';
import { Paper } from '@mui/material';
import * as style from './InfoTabPanelContent.style';

interface IInfoTabPanelContentProps {
    category: string;
    sortOption: string;
}

export default function InfoTabPanlelContent({
    category,
    sortOption,
}: IInfoTabPanelContentProps) {
    const filteredCards = infoCardsData
        .filter((card) => card.category === category)
        .sort((a, b) => {
            if (sortOption === 'latest') {
                return a.date.getTime() - b.date.getTime(); // 최신순
            }
            if (sortOption === 'popular') {
                return b.view - a.view; // 인기순
            }
            return 0;
        });

    return (
        <Paper
            elevation={0}
            sx={style.paperStyle}
        >
            {filteredCards.map((card, idx) => (
                <InfoCard
                    key={idx}
                    title={card.title}
                    date={card.date}
                    view={card.view}
                    image={card.image}
                    category={card.category}
                />
            ))}
        </Paper>
    );
}
