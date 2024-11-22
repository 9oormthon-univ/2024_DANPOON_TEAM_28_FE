import { Tabs, Tab, Box, Typography } from '@mui/material';
import * as style from './InfoCategoryTabs.style';

interface IInfoCategoryTabsProps {
    tabs: string[];
    selectedTab: number;
    onTabChange: (newTab: number) => void;
}

const InfoCategoryTabs = ({
    tabs,
    selectedTab,
    onTabChange,
}: IInfoCategoryTabsProps) => {
    return (
        <Box sx={style.containerStyle}>
            <Box sx={style.tabsStyle}>
                <Tabs
                    value={selectedTab}
                    variant='fullWidth'
                    onChange={(event, newTab) => onTabChange(newTab)}
                    aria-label='info tabs'
                >
                    {tabs.map((tab: string, index: number) => (
                        <Tab
                            key={index}
                            label={
                                <Typography
                                    sx={style.labelStyle}
                                    variant={
                                        selectedTab === index
                                            ? 'body3SemiBold'
                                            : 'body3Regular'
                                    }
                                >
                                    {tab}
                                </Typography>
                            }
                        />
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
};

export default InfoCategoryTabs;
