import { SxProps, Theme } from '@mui/system';

export const containerStyle: SxProps = {
  width: '100%',
  maxWidth: '100%',
};

export const tabsStyle: SxProps<Theme> = (theme) => ({
  borderBottom: 1,
  borderColor: 'divider',
  width: '100%',
  '.MuiTab-root': {
    fontSize: '0.8rem',
      padding:'0',
    minWidth: 0,
    textAlign: 'center',
    //...theme.typography.bodh3Regular,
  },
});

export const tabPanelStyle: SxProps = {
  width: '100%',
  padding: '16px',
  boxSizing: 'border-box',
};
