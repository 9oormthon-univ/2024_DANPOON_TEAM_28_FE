import Layout from '@/layouts/Layout';
import { useForm } from 'react-hook-form';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';
import DifficultyRadio from './DifficultyRadio';
import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import ImageUploadButton from '@/components/ImageUploadButton';
import { useState } from 'react';
import Stamp from '@/assets/mission/stamp.png';

const MissionCompletePage = () => {
    const [previewImage, setPreviewImage] = useState<string>('');

    const { control, handleSubmit, register } = useForm<IMissionCompleteForm>(
        {}
    );
    return (
        <Layout removeBottomNavigation>
            <Stack
                component={'form'}
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
                direction={'column'}
                alignItems={'center'}
            >
                <Typography
                    variant={'heading1Medium'}
                    color={'livelyPrimary.1'}
                    textAlign={'center'}
                >
                    세상을 향해
                    <br />한 발짝 나아갔어요!
                </Typography>
                <Typography>{'물 한 컵 마시기 성공!'}</Typography>

                <ImageUploadButton
                    setPreviewImage={setPreviewImage}
                    register={register('image')}
                    sx={{
                        borderRadius: '50%',
                        width: 'fit-content',
                        height: 'fit-content',
                    }}
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
                <Button sx={{ p: 0 }}>
                    <Typography
                        variant={'body3Regular'}
                        color={'#aaa'}
                        sx={{ textDecoration: 'underline' }}
                    >
                        {'사진 찍기'}
                    </Typography>
                </Button>
                <TextField />
                <Typography
                    variant={'body3SemiBold'}
                    color={'#000'}
                    textAlign={'center'}
                >
                    미션 난이도가 어땠는지 알려주세요
                </Typography>
                <DifficultyRadio control={control} />
                <Button
                    variant={'contained'}
                    type={'submit'}
                    sx={{ width: '100%', marginTop: '1rem' }}
                >
                    {'완료'}
                </Button>
            </Stack>
        </Layout>
    );
};

export default MissionCompletePage;
