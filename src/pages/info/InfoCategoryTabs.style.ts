import { SxProps } from '@mui/system';

export const containerStyle: SxProps = {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'white',
    '& .MuiTabs-flexContainer': {
      paddingLeft: '5px',
      paddingRight: '5px',
    },
};

export const tabsStyle: SxProps = {
    borderBottom: 2,
    borderColor: 'divider',
  justifyContent: 'space-between',
    width: '100%',
    '& .MuiTab-root': {
        minWidth: 0,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
};

export const tabPanelStyle: SxProps = {
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
};
