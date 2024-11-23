import Layout from '@/layouts/Layout';
import { Controller, useForm } from 'react-hook-form';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';
import DifficultyRadio from './DifficultyRadio';
import {
    Avatar,
    Button,
    IconButton,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import ImageUploadButton from '@/components/ImageUploadButton';
import { useState } from 'react';
import Stamp from '@/assets/mission/stamp.png';
import { ChevronLeftIcon } from '@/components/Icons';

const MissionCompletePage = () => {
    const [previewImage, setPreviewImage] = useState<string>('');

    const { control, handleSubmit, setValue } = useForm<IMissionCompleteForm>();
    return (
        <Layout removeBottomNavigation>
            <Stack
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                    width: '100%',
                    paddingTop: '1.5rem',
                    paddingBottom: '1rem',
                }}
            >
                <IconButton
                    sx={{
                        p: 0,
                    }}
                >
                    <ChevronLeftIcon
                        sx={{
                            color: 'livelyPrimary.2',
                            width: '0.5rem',
                            height: '1rem',
                        }}
                    />
                </IconButton>
                <Typography
                    variant={'heading1Medium'}
                    color={'livelyPrimary.1'}
                    textAlign={'center'}
                >
                    세상을 향해
                    <br />한 발짝 나아갔어요!
                </Typography>
                <div style={{ width: '0.5rem', height: '1rem' }} />
            </Stack>
            <Stack
                component={'form'}
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
                direction={'column'}
                alignItems={'center'}
                sx={{
                    width: '100%',
                    maxWidth: '20rem',
                }}
            >
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={{
                        textAlign: 'center',
                        px: '1.5rem',
                        backgroundColor: 'livelyPrimary.2',
                        color: '#fff',
                        marginBottom: '1rem',
                        borderRadius: '1.25rem',
                        height: '2rem',
                    }}
                >
                    <Typography variant={'body2'}>
                        {'물 한 컵 마시기 성공!'}
                    </Typography>
                </Stack>

                <ImageUploadButton
                    setPreviewImage={setPreviewImage}
                    sx={{
                        borderRadius: '50%',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: 0,
                        marginBottom: '0.75rem',
                    }}
                    setValue={(image: File) => setValue('image', image)}
                >
                    <Avatar
                        src={previewImage}
                        sx={{
                            width: '13rem',
                            height: '13rem',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <img src={Stamp} alt={'stamp'} />
                    </Avatar>
                </ImageUploadButton>
                <Button
                    sx={{
                        p: 0,
                        mb: '1rem',
                    }}
                >
                    <Typography
                        variant={'body3Regular'}
                        color={'#aaa'}
                        sx={{
                            borderBottom: '1px solid #aaa',
                        }}
                    >
                        {'인증샷 찍기'}
                    </Typography>
                </Button>
                <Controller
                    control={control}
                    name={'review'}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            placeholder={'소감을 알려주세요.'}
                            multiline
                            fullWidth
                            rows={4}
                            sx={{
                                mb: '1.5rem',
                                width: '100%',
                                maxWidth: '20rem',
                                '& label.Mui-focused': {
                                    color: '#000',
                                },
                                '& .MuiInput-underline:after': {
                                    border: 'none',
                                },
                                '& .MuiOutlinedInput-root': {
                                    padding: '1.25rem',
                                    borderRadius: '1rem',
                                    backgroundColor: 'livelyPrimary.4',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                    '&:hover fieldset': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Pretendard',
                                    fontSize: '0.9375rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '1.25rem',
                                },
                            }}
                        />
                    )}
                />
                <Typography
                    variant={'body3SemiBold'}
                    color={'#000'}
                    textAlign={'left'}
                    sx={{
                        width: '100%',
                        paddingLeft: '0.25rem',
                        mb: '0.75rem',
                    }}
                >
                    미션 난이도가 어땠는지 알려주세요
                </Typography>
                <DifficultyRadio control={control} />

                <Button
                    variant={'contained'}
                    type={'submit'}
                    sx={{ width: '100%', my: '1.5rem' }}
                >
                    {'완료'}
                </Button>
            </Stack>
        </Layout>
    );
};

export default MissionCompletePage;
