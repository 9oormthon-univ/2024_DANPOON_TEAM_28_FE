import ClockIcon from '@/components/Icons/ClockIcon';
import RepeatIcon from '@/components/Icons/RepeatIcon';
import { Stack, Typography } from '@mui/material';

export interface ISubContentProps {
    type: 'repeat' | 'ring';
    content: string;
    finished: boolean;
}

const SubContent = ({ type, content, finished }: ISubContentProps) => {
    const color = finished ? '#bbb' : 'livelyPrimary.2';

    return (
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
            {type === 'repeat' ? (
                <RepeatIcon sx={{ color: color, fontSize: '1rem' }} />
            ) : (
                <ClockIcon sx={{ color: color, fontSize: '1rem' }} />
            )}
            <Typography
                variant={'body3Medium'}
                sx={{ color: color, verticalAlign: 'middle' }}
            >
                {content}
            </Typography>
        </Stack>
    );
};

export default SubContent;
