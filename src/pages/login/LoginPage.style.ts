import { SxProps } from '@mui/material';

export const rootBoxStyle: SxProps = {
  height: '100vh',
  backgroundColor: 'livelyPrimary.2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
};

export const paperStyle: SxProps = {
  width: '100%',
  height: '82%',
  borderRadius: '30px 30px 0 0',
  display: 'flex',
  bottom: '0',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#ffffff',
};

export const logoBoxStyle: SxProps = {
  textAlign: 'center',
};

export const heading1Style: SxProps = {
  color: 'livelyPrimary.1',
  marginTop: '35vw',
  marginBottom: '5vw',
};

export const heading2Style: SxProps = {
  fontWeight: '300',
  lineHeight: '140%',
  color: 'livelyPrimary.1',
  marginTop: '15vw',
  marginBottom: '15vw',
};

export const buttonBoxStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: '30px',
};

export const linkStyle: SxProps = {
  color: '#555',
  fontSize: '12px',
  textAlign: 'center',
  marginBottom: '10px',
};
