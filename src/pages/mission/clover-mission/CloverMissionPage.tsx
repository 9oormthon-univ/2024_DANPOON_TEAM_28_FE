import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Layout from '@/layouts/Layout';
import { Button, Stack, Typography } from '@mui/material';
import MissionCard from '../MissionCard';
import MissionContent from '../MissionContent';
import { ReloadIcon } from '@/components/Icons';
import * as style from './CloverMission.styles';
import { useModal } from '@/hooks/useModal';
import AlertModal from '@/components/AlertModal';
import { useState } from 'react';

export interface ICloverMission {
    id: number;
    name: string;
    category: string;
    difficulty: number;
}

const data: Array<ICloverMission> = [
    {
        id: 1,
        name: '클로버 미션 1',
        category: '건강 챙기기',
        difficulty: 1,
    },
    {
        id: 2,
        name: '클로버 미션 2',
        category: '인간 관계',
        difficulty: 2,
    },
    {
        id: 3,
        name: '클로버 미션 3',
        category: '사회 활동',
        difficulty: 3,
    },
];

const CloverMissionPage = () => {
    const [selected, setSelected] = useState<number>(0);

    const { modalOpen, openModal, closeModal } = useModal();

    const handleMissionClick = (idx: number) => {
        setSelected(idx);
        openModal();
    };

    return (
        <>
            <Layout>
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    sx={{
                        mb: '2rem',
                        width: '100%',
                    }}
                >
                    <Header />
                    <Typography
                        variant={'heading1Medium'}
                        color={'livelyPrimary.1'}
                        align={'center'}
                        sx={style.headingStyle}
                    >
                        {'오늘은 어떤 클로버 미션에\n도전할까요?'}
                    </Typography>
                    <Logo size={'large'} showName={false} />
                </Stack>
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={2.5}
                    sx={{
                        px: '1rem',
                        width: '100%',
                    }}
                >
                    {data.map((mission, idx) => {
                        return (
                            <Button
                                key={mission.id}
                                sx={style.missionButtonStyle}
                                onClick={() => {
                                    handleMissionClick(idx);
                                }}
                            >
                                <MissionCard number={idx + 1} type='number'>
                                    <MissionContent
                                        name={mission.name}
                                        category={mission.category}
                                        difficulty={mission.difficulty}
                                    />
                                </MissionCard>
                            </Button>
                        );
                    })}
                    <Button variant={'contained'} sx={style.reloadButtonStyle}>
                        <ReloadIcon
                            sx={{
                                fontSize: '1.125rem',
                            }}
                        />
                    </Button>
                </Stack>
            </Layout>
            <AlertModal
                open={modalOpen}
                onClose={closeModal}
                handleNegativeClick={closeModal}
                handlePositiveClick={closeModal} // TODO : 동작 수정 필요
            >
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    spacing={0.5}
                    width={'100%'}
                >
                    <Typography
                        variant={'heading2Medium'}
                        color={'livelyPrimary.2'}
                        align={'center'}
                    >
                        {data[selected] && data[selected].name}
                    </Typography>
                    <Typography
                        variant={'body1'}
                        color={'#000'}
                        align={'center'}
                    >
                        {'클로버 미션을\n시작하시겠습니까?'}
                    </Typography>
                </Stack>
            </AlertModal>
        </>
    );
};

export default CloverMissionPage;
