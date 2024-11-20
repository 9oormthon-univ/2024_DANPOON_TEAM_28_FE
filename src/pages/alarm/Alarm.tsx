import { IAlarmProps } from '@/types/IAlarmProps';
import { ListItem, ListItemText, Typography } from '@mui/material';
import AlarmIcon from './AlarmIcon';

const Alarm = ({ title, subtitle, pushedAt, type, read }: IAlarmProps) => {
    return (
        <ListItem
            sx={{
                backgroundColor: '#fff',
            }}
        >
            <AlarmIcon type={type} read={read} />
            <ListItemText
                primary={
                    <>
                        <Typography variant={'body3Medium'}>{title}</Typography>
                        {subtitle && (
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: 'livelyPrimary.2',
                                }}
                                variant={'body3Medium'}
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </>
                }
                secondary={pushedAt}
                secondaryTypographyProps={{
                    variant: 'body3Regular',
                    color: '#636363',
                    sx: {
                        mt: '0.25rem',
                    },
                }}
            />
        </ListItem>
    );
};

export default Alarm;
