import { CheckIcon, ChevronLeftIcon } from '@/components/Icons';
import { Button, IconButton, Stack, Typography } from '@mui/material';

const AlarmHeader = ({
    filterUnread,
    handleFilterUnread,
}: {
    filterUnread: boolean;
    handleFilterUnread: () => void;
}) => {
    return (
        <>
            <Stack
                sx={{ px: '1rem', height: 'fit-content', pt: '1rem' }}
                direction='row'
                justifyContent={'flex-start'}
                alignItems={'center'}
            >
                <IconButton
                    color={'primary'}
                    sx={{
                        p: 0,
                        width: '1.25rem',
                    }}
                >
                    <ChevronLeftIcon
                        sx={{
                            width: '0.5rem',
                            height: '1rem',
                        }}
                    />
                </IconButton>
                <Typography
                    sx={{ color: 'livelyPrimary.2', pl: '0.25rem' }}
                    variant={'heading1Medium'}
                >
                    알림
                </Typography>
            </Stack>
            <Stack direction='row' justifyContent={'flex-end'}>
                <Button
                    onClick={handleFilterUnread}
                    sx={{
                        height: '1.25rem',
                        p: 0,
                        mr: '1rem',
                    }}
                >
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={1}
                        sx={{
                            color: filterUnread ? 'livelyPrimary.2' : '#999999',
                        }}
                    >
                        <CheckIcon
                            sx={{
                                width: '0.75rem',
                                height: '0.5rem',
                            }}
                        />
                        <Typography
                            sx={{
                                color: filterUnread
                                    ? 'livelyPrimary.2'
                                    : '#999999',
                            }}
                            variant={'body3SemiBold'}
                        >
                            안 읽음
                        </Typography>
                    </Stack>
                </Button>
            </Stack>
        </>
    );
};

export default AlarmHeader;
