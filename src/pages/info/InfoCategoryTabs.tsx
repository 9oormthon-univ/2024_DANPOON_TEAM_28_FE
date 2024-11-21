import * as React from 'react';
import {Tabs, Tab, Box, Typography} from '@mui/material';
import * as style from './InfoCategoryTabs.style';

const tabLabels = ['지원사업', '마음챙김', '위로의 글', '생활습관', '방문지 추천'];

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{...style.tabPanelStyle}}>{children}</Box>}
    </div>
  );
}

export default function InfoCategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{...style.containerStyle}}>
      <Box sx={{ ...style.tabsStyle }}>
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="info tabs" >
        {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={
                <Typography variant={value === index ? 'body3SemiBold' : 'body3Regular'}>
                  {label}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Box>
      {tabLabels.map((label, index) => (
        <TabPanel key={index} value={value} index={index}>
          {label}
        </TabPanel>
      ))}
    </Box>
  );
}
