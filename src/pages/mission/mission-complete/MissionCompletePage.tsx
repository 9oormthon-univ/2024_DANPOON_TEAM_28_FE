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
import { useNavigate } from 'react-router-dom';
import * as style from './MissionComplete.style';

const MissionCompletePage = () => {
    const [previewImage, setPreviewImage] = useState<string>('');

    const navigation = useNavigate();

    const { control, handleSubmit, setValue } = useForm<IMissionCompleteForm>();

    const returnToMissionPage = () => {
        navigation(-1);
    };

    return (
        <Layout removeBottomNavigation>
            <Stack
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={style.headerStyle}
            >
                <IconButton
                    sx={{ p: 0 }}
                    onClick={() => {
                        navigation(-1);
                    }}
                >
                    <ChevronLeftIcon sx={style.chevronLeftIconStyle} />
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
                    navigation(-1);
                })}
                direction={'column'}
                alignItems={'center'}
                sx={style.formStyle}
            >
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={style.completedMissionStyle}
                >
                    <Typography variant={'body2'}>
                        {'물 한 컵 마시기 성공!'}
                    </Typography>
                </Stack>
                <ImageUploadButton
                    setPreviewImage={setPreviewImage}
                    sx={style.imageUploadButtonStyle}
                    setValue={(image: File) => setValue('image', image)}
                >
                    <Avatar src={previewImage} sx={style.defaultImageStyle}>
                        <img src={Stamp} alt={'stamp'} />
                    </Avatar>
                </ImageUploadButton>
                <Button sx={{ p: 0, mb: '1rem' }}>
                    <Typography
                        variant={'body3Regular'}
                        color={'#aaa'}
                        sx={{ borderBottom: '1px solid #aaa' }}
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
                            sx={style.textFieldStyle}
                        />
                    )}
                />
                <Typography
                    variant={'body3SemiBold'}
                    color={'#000'}
                    textAlign={'left'}
                    sx={style.missionDifficultyLabelStyle}
                    id={'mission-difficulty-label'}
                >
                    미션 난이도가 어땠는지 알려주세요
                </Typography>
                <DifficultyRadio control={control} />

                <Button
                    variant={'contained'}
                    type={'submit'}
                    sx={style.missionCompleteSaveStyle}
                >
                    <Typography
                        variant={'body3Medium'}
                        color={'#fff'}
                        sx={{ width: '100%' }}
                    >
                        {'완료'}
                    </Typography>
                </Button>
            </Stack>
        </Layout>
    );
};

export default MissionCompletePage;
