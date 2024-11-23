import Header from '@/components/Header';
import Layout from '@/layouts/Layout';
import MissionImage from './MissionImage';
import { Button, Stack, Typography } from '@mui/material';
import MissionCard from './MissionCard';
import MissionContent from './missionCard/MissionContent';
import CloverSubContentCategory from './missionCard/CloverSubContent';
import SubContent from './missionCard/SubContent';
import { CheckIcon } from '@/components/Icons';
import * as style from './mission.style';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

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
const storedMission = localStorage.getItem('cloverMission');

const finishedCloverMission: ICloverMission = {
    id: 4,
    type: 'clover',
    name: '미션 1',
    category: '건강 챙기기',
    difficulty: 1,
    finished: true,
};

const missionData: IMissionPage = {
    cloverClearCount: 1,
    missionClearCount: 1,
    missionList: [
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
    const [data, setData] = useState(missionData);
    const navigate = useNavigate();
    const handleCloverMissionClick = () => {
        navigate('/clover-mission');
    };

    const handleMissionFinished = () => {
        navigate('/mission-complete');
    };
    useEffect(() => {
        const storedMission = localStorage.getItem('cloverMission');
        setData((prev) => {
            let updatedMissionList = [...prev.missionList];

            if (storedMission) {
                const cloverMission = JSON.parse(storedMission);

                // 이미 존재하는 미션이 아닌 경우에만 추가
                if (
                    !updatedMissionList.some(
                        (mission) => mission.id === cloverMission.id
                    )
                ) {
                    updatedMissionList.unshift(cloverMission);
                }
            } else {
                // 로컬스토리지에 값이 없으면 기본 미션 추가
                if (
                    !updatedMissionList.some(
                        (mission) => mission.id === finishedCloverMission.id
                    )
                ) {
                    updatedMissionList.unshift(finishedCloverMission);
                }
            }

            return { ...prev, missionList: updatedMissionList };
        });
    }, []);

    return (
        <Layout removePadding>
            <Header padding />
            <MissionImage clearedCount={data.cloverClearCount} />
            <Typography
                variant={'heading1Medium'}
                sx={style.missionCatchPhraseStyle}
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
                        sx={style.missionCardContainerStyle}
                        disabled={mission.finished && mission.type === 'my'}
                        onClick={() => {
                            if (mission.finished && mission.type === 'clover') {
                                handleCloverMissionClick();
                            } else {
                                handleMissionFinished();
                            }
                        }}
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
                                <CheckIcon sx={style.checkIconStyle} />
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
            <Button variant={'outlined'} sx={style.addMissionButtonStyle}>
                <Typography variant={'body3Medium'}>
                    {'마이 미션 추가'}
                </Typography>
            </Button>
        </Layout>
    );
};

export default MissionPage;
