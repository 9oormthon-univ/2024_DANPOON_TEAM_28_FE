import * as React from 'react';
import {Tabs, Tab, Box} from '@mui/material';

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function InfoCategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
          <Tab label="지원사업"  />
          <Tab label="마음챙김"  />
          <Tab label="위로의 글"  />
          <Tab label="생활습관"  />
          <Tab label="방문지 추천"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        지원사업
      </TabPanel>
      <TabPanel value={value} index={1}>
        마음챙김
      </TabPanel>
      <TabPanel value={value} index={2}>
        위로의 글
      </TabPanel>
      <TabPanel value={value} index={3}>
        생활습관
      </TabPanel>
      <TabPanel value={value} index={4}>
        방문지 추천
      </TabPanel>
    </Box>
  );
}
