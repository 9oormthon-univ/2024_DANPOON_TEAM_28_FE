import {
    CounselorIcon,
    GPSIcon,
    HealingIcon,
    LeafIcon,
} from '@/components/Icons';
import {
    Avatar,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';

const UnSelectedUi = () => {
    const buttonDataList = [
        {
            name: '공원',
            value: 'park',
            icon: LeafIcon,
        },
        {
            name: '정신건강과',
            value: 'mental-health',
            icon: HealingIcon,
        },
        {
            name: '도서관',
            value: 'library',
            icon: LeafIcon,
        },
        {
            name: '상담센터',
            value: 'counselor',
            icon: CounselorIcon,
        },
    ];
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
                mb: '7rem',
            }}
            direction={'column'}
            spacing={1.5}
            alignItems={'center'}
        >
            <hr
                style={{
                    width: '7.5rem',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: '#F3F3F3',
                }}
            />
            <Stack
                spacing={1}
                direction={'row'}
                width={'100%'}
                sx={{
                    maxWidth: '20rem',
                }}
            >
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
            <ToggleButtonGroup
                aria-labelledby='mission-difficulty-label'
                value={'mental-health'}
                exclusive
                aria-label='options'
                sx={{
                    '& .MuiToggleButton-root': {
                        border: 'none',
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'transparent !important',
                    },
                    px: '0.75rem',
                }}
            >
                {buttonDataList.map((buttonData) => {
                    return (
                        <ToggleButton
                            key={buttonData.value}
                            value={buttonData.value}
                            aria-label={`option${buttonData.name}`}
                        >
                            <Stack spacing={'1.5rem'}>
                                <Avatar
                                    sx={{
                                        width: '3.75rem',
                                        height: '3.75rem',
                                        backgroundColor:
                                            buttonData.value === 'mental-health'
                                                ? 'livelyPrimary.2'
                                                : '#F3F3F3',
                                    }}
                                >
                                    <buttonData.icon
                                        sx={{
                                            fontSize: '1.5rem',
                                            color:
                                                buttonData.value ===
                                                'mental-health'
                                                    ? '#fff'
                                                    : 'livelyPrimary.2',
                                        }}
                                    />
                                </Avatar>
                                <Typography variant={'body4Regular'}>
                                    {buttonData.name}
                                </Typography>
                            </Stack>
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
        </Stack>
    );
};

export default UnSelectedUi;
