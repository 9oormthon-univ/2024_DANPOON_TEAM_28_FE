import { Stack, Typography } from '@mui/material';

export interface IMissionContentProps {
    name: string;
    children: React.ReactNode;
}

const MissionContent = ({ name, children }: IMissionContentProps) => {
    return (
        <Stack
            direction={'column'}
            spacing={0.5}
            alignItems={'flex-start'}
            sx={{ width: '100%' }}
        >
            <Typography variant={'body3Medium'} color={'#000'}>
                {name}
            </Typography>
            {children}
        </Stack>
    );
};

export default MissionContent;
