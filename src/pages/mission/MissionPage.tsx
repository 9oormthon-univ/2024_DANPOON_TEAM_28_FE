import Header from '@/components/Header';
import Layout from '@/layouts/Layout';
import MissionImage from './MissionImage';
import { Button, Stack, Typography } from '@mui/material';
import MissionCard from './MissionCard';
import MissionContent from './missionCard/MissionContent';
import CloverSubContentCategory from './missionCard/CloverSubContent';
import SubContent from './missionCard/SubContent';
import { CheckIcon } from '@/components/Icons';

interface ICloverMission {
    type: 'clover';
    id: number;
    name: string;
    category: string;
    difficulty: number;
    finished: boolean;
}

interface IMyMission {
    type: 'my';
    id: number;
    name: string;
    repeatAt?: string;
    ringAt?: string;
    finished: boolean;
}

interface IMissionPage {
    cloverClearCount: number;
    missionClearCount: number;
    missionList: Array<ICloverMission | IMyMission>;
}

const data: IMissionPage = {
    cloverClearCount: 1,
    missionClearCount: 1,
    missionList: [
        {
            id: 1,
            type: 'clover',
            name: '미션 1',
            category: '건강 챙기기',
            difficulty: 1,
            finished: false,
        },
        {
            type: 'my',
            id: 2,
            name: 'SNS에 선플, 응원 댓글 남기기',
            finished: false,
        },
        {
            type: 'my',
            id: 3,
            name: '미션 3',
            repeatAt: '매일',
            ringAt: '16:00',
            finished: false,
        },
        {
            id: 4,
            type: 'clover',
            name: '미션 1',
            category: '건강 챙기기',
            difficulty: 1,
            finished: true,
        },
        {
            type: 'my',
            id: 5,
            name: '미션 5',
            repeatAt: '매일',
            ringAt: '16:00',
            finished: true,
        },
        {
            id: 6,
            type: 'my',
            name: '미션 6',
            finished: true,
        },
    ],
};

const MissionPage = () => {
    return (
        <Layout removePadding>
            <Header padding />
            <MissionImage clearedCount={data.cloverClearCount} />
            <Typography
                variant={'heading1Medium'}
                sx={{
                    pt: '1.75rem',
                    pb: '2rem',
                    px: '1.25rem',
                    color: 'livelyPrimary.1',
                    '& span': { color: 'livelyPrimary.2' },
                    width: '100%',
                    boxSizing: 'border-box',
                    wordBreak: 'keep-all',
                }}
            >
                {`준상 님! 오늘도 세상을 향해`}
                <br />
                <span>{data.missionClearCount}</span>
                {`발짝 나아갔어요`}
            </Typography>
            <Stack
                direction={'column'}
                alignItems={'center'}
                width={'100%'}
                spacing={2}
                sx={{ px: '1rem', boxSizing: 'border-box' }}
            >
                {data.missionList.map((mission) => (
                    <Button
                        key={mission.id}
                        onClick={() => console.log(mission)}
                        sx={{
                            width: '100%',
                            height: '4.75rem',
                            p: 0,
                            borderRadius: '1rem',
                        }}
                        disabled={mission.finished && mission.type === 'my'}
                    >
                        <MissionCard
                            type={mission.type}
                            finished={mission.finished}
                        >
                            {mission.type === 'clover' && mission.finished ? (
                                <Typography
                                    variant={'body3Medium'}
                                    sx={{
                                        wordBreak: 'keep-all',
                                        color: '#000',
                                    }}
                                >
                                    {'새로운 클로버 미션 도전하기!'}
                                </Typography>
                            ) : (
                                <MissionContent name={mission.name}>
                                    {mission.type === 'clover' ? (
                                        <CloverSubContentCategory
                                            category={mission.category}
                                            difficulty={mission.difficulty}
                                            finished={mission.finished}
                                        />
                                    ) : (
                                        (mission.repeatAt ||
                                            mission.ringAt) && (
                                            <Stack
                                                direction={'row'}
                                                spacing={1.5}
                                                alignItems={'center'}
                                            >
                                                {mission.repeatAt && (
                                                    <SubContent
                                                        content={
                                                            mission.repeatAt
                                                        }
                                                        type={'repeat'}
                                                        finished={
                                                            mission.finished
                                                        }
                                                    />
                                                )}
                                                {mission.ringAt && (
                                                    <SubContent
                                                        content={mission.ringAt}
                                                        type={'ring'}
                                                        finished={
                                                            mission.finished
                                                        }
                                                    />
                                                )}
                                            </Stack>
                                        )
                                    )}
                                </MissionContent>
                            )}
                            {!mission.finished ? (
                                <CheckIcon
                                    sx={{
                                        color: 'livelyPrimary.2',
                                        fontSize: '1rem',
                                    }}
                                />
                            ) : (
                                mission.type === 'my' && (
                                    <Typography
                                        variant={'body3Medium'}
                                        sx={{
                                            wordBreak: 'keep-all',
                                        }}
                                    >
                                        {'완료'}
                                    </Typography>
                                )
                            )}
                        </MissionCard>
                    </Button>
                ))}
            </Stack>
            <Button
                variant={'outlined'}
                sx={{
                    width: '20.375rem',
                    height: '2.75rem',
                    my: '2.5rem',
                    borderRadius: '1.5rem',
                    border: '1px solid #999',
                    color: '#000',
                }}
            >
                {
                    <Typography variant={'body3Medium'}>
                        {'마이 미션 추가'}
                    </Typography>
                }
            </Button>
        </Layout>
    );
};

export default MissionPage;
