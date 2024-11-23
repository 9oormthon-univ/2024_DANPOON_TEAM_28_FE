import { GPSIcon } from '@/components/Icons';
import { Stack, Typography } from '@mui/material';

const UnSelectedUi = () => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '16.25rem',
                zIndex: 200,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '1.25rem',
                boxSizing: 'border-box',
            }}
        >
            <hr
                style={{
                    width: '7.5rem',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: '#F3F3F3',
                }}
            />
            <Stack spacing={1} direction={'row'}>
                <GPSIcon
                    sx={{
                        fontSize: '1rem',
                        color: 'livelyPrimary.2',
                    }}
                />
                <Typography variant={'body4SemiBold'}>
                    {'서울특별시 광진구 자양동'}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default UnSelectedUi;
