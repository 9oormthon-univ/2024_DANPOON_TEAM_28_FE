import Layout from '@/layouts/Layout';
import { useForm } from 'react-hook-form';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';
import DifficultyRadio from './DifficultyRadio';
import { Button, TextField, Typography } from '@mui/material';

const MissionCompletePage = () => {
    const { control, handleSubmit } = useForm<IMissionCompleteForm>({});
    return (
        <Layout removeBottomNavigation>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
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
            </form>
        </Layout>
    );
};

export default MissionCompletePage;
