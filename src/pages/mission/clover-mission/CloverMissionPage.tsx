import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Layout from '@/layouts/Layout';
import { Button, Stack, Typography } from '@mui/material';
import MissionCard from '../MissionCard';
import MissionContent from '../MissionContent';
import { ReloadIcon } from '@/components/Icons';

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
    return (
        <Layout
            sx={{
                minHeight: '100svh',
            }}
        >
            <Stack
                direction={'column'}
                alignItems={'center'}
                sx={{
                    mb: '2rem',
                }}
            >
                <Header />
                <Typography
                    variant={'heading1Medium'}
                    color={'livelyPrimary.1'}
                    align={'center'}
                    sx={{
                        wordBreak: 'keep-all',
                        whiteSpace: 'pre-line',
                        mt: '0.25rem',
                        mb: '1.5rem',
                    }}
                >
                    {'오늘은 어떤 클로버 미션에\n도전할까요?'}
                </Typography>
                <Logo size={'large'} showName={false} />
            </Stack>
            <Stack
                direction={'column'}
                alignItems={'center'}
                spacing={2.5}
                sx={{ px: '1rem' }}
            >
                {data.map((mission, idx) => {
                    return (
                        <Button
                            key={mission.id}
                            sx={{
                                width: '100%',
                                height: '4.75rem',
                                p: 0,
                                borderRadius: '1rem',
                                maxWidth: '20rem',
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
                <Button
                    variant={'contained'}
                    sx={{
                        width: '6.25rem',
                        height: '2.5rem',
                        borderRadius: '1.56rem',
                        mt: '0.5rem',
                    }}
                >
                    <ReloadIcon
                        sx={{
                            fontSize: '1.125rem',
                        }}
                    />
                </Button>
            </Stack>
        </Layout>
    );
};

export default CloverMissionPage;
