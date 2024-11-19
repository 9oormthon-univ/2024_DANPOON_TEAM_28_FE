import { IAlarmProps } from '@/types/IAlarmProps';
import { ListItem, ListItemText, Typography } from '@mui/material';
import AlarmIcon from './AlarmIcon';

const Alarm = ({ title, subtitle, pushedAt, type, read }: IAlarmProps) => {
    return (
        <ListItem>
            <AlarmIcon type={type} read={read} />
            <ListItemText
                primary={
                    <>
                        <Typography>{title}</Typography>
                        {subtitle ?? (
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </>
                }
                secondary={pushedAt}
            />
        </ListItem>
    );
};

export default Alarm;
