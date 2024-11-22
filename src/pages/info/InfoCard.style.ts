import { SxProps, Theme } from '@mui/material';

export const cardStyle: SxProps<Theme> = {
    maxWidth: '40vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    boxShadow: 'none',
};

export const cardMediaStyle: SxProps<Theme> = {
    aspectRatio: '156 / 117',
    borderRadius: '16px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
};

export const cardContentStyle = {
    paddingX: '3px',
};

export const dateViewContainerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
};

export const viewCountTextStyle: SxProps<Theme> = {
    color: 'livelyPrimary.2',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
};

export const titleStyle: SxProps<Theme> = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    wordBreak: 'break-word',
}