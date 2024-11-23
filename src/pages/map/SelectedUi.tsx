import { CheckIcon, ChevronDownIcon, GlobalIcon } from '@/components/Icons';
import { IPlaceData } from '@/types/IPlaceData';
import { Avatar, Grid2, Stack, Typography } from '@mui/material';

const SelectedUi = ({
    placeName,
    address,
    siteUrl,
    oneIntro,
}: Omit<IPlaceData, 'lng | lat'>) => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '17.25rem',
                zIndex: 200,
                borderRadius: '1.25rem 1.25rem 0rem 0rem',
                backgroundColor: 'white',
                padding: '1rem',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                boxSizing: 'border-box',
            }}
        >
            <hr
                style={{
                    width: '7.5rem',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: '#F3F3F3',
                    marginBottom: '1.375rem',
                }}
            />
            <Grid2 container spacing={1} alignItems={'center'} width={'100%'}>
                <Grid2 container alignItems={'center'}>
                    <Grid2>
                        <Typography variant={'body1'}>{placeName}</Typography>
                    </Grid2>
                    <Grid2>
                        <Avatar
                            sx={{
                                width: '1rem',
                                height: '1rem',
                                backgroundColor: 'livelyPrimary.3',
                            }}
                        >
                            <CheckIcon sx={{ fontSize: '0.5rem' }} />
                        </Avatar>
                    </Grid2>
                    <Grid2>
                        <Typography
                            variant={'body4Regular'}
                            sx={{ color: '#888' }}
                        >
                            {'정신건강의학과'}
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 size={12}>
                    <Typography variant={'body3Regular'} sx={{ color: '#000' }}>
                        {address}
                    </Typography>
                </Grid2>
                <Grid2>
                    <Typography
                        variant={'body3Regular'}
                        sx={{
                            color: 'livelyPrimary.2',
                            '& span': {
                                color: '#000',
                            },
                        }}
                    >
                        {'진료 중'}
                        <span>{' 18:00까지'}</span>
                    </Typography>
                </Grid2>
                <Grid2>
                    <ChevronDownIcon
                        sx={{
                            fontSize: '0.5rem',
                            color: 'livelyPrimary.2',
                        }}
                    />
                </Grid2>
                <Grid2
                    size={12}
                    sx={{
                        display: siteUrl ? undefined : 'none',
                    }}
                >
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <GlobalIcon
                            sx={{
                                color: 'lightPrimary.2',
                                fontSize: '0.75rem',
                            }}
                        />
                        <Typography variant={'body4Regular'}>
                            {siteUrl}
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
            <Typography
                variant={'body3Regular'}
                sx={{
                    color: '#000',
                    px: '1rem',
                    py: '0.5rem',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '1.25rem',
                    mt: '0.875rem',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {oneIntro}
            </Typography>
        </Stack>
    );
};

export default SelectedUi;
