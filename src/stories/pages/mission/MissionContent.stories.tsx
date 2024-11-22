import { Meta, StoryObj } from '@storybook/react';
import MissionContent, {
    IMissionContentProps,
} from '@/pages/mission/missionCard/MissionContent';
import CloverSubContentCategory from '@/pages/mission/missionCard/CloverSubContent';
import { Stack } from '@mui/material';
import SubContent from '@/pages/mission/missionCard/SubContent';

const meta: Meta<IMissionContentProps> = {
    title: 'mission/MissionContent',
    component: MissionContent,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: {
                type: 'text',
            },
            description: '미션 이름',
        },
    },
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: '#fff' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CloverMission: Story = {
    args: {
        name: '미션 이름',
        children: (
            <CloverSubContentCategory
                category={'건강 챙기기'}
                difficulty={1}
                finished={false}
            />
        ),
    },
};

export const MyMission: Story = {
    args: {
        name: 'SNS에 선플, 응원 댓글 남기기',
        children: (
            <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                <SubContent content={'매일'} type={'repeat'} finished={false} />
                <SubContent
                    content={'오후 6시'}
                    type={'ring'}
                    finished={false}
                />
            </Stack>
        ),
    },
};

export const MyMissionFinished: Story = {
    args: {
        name: 'SNS에 선플, 응원 댓글 남기기',
        children: (
            <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                <SubContent content={'매일'} type={'repeat'} finished={true} />
                <SubContent
                    content={'오후 6시'}
                    type={'ring'}
                    finished={true}
                />
            </Stack>
        ),
    },
};

export const CloverMissionFinished: Story = {
    args: {
        name: '미션 이름',
        children: (
            <CloverSubContentCategory
                category={'건강 챙기기'}
                difficulty={1}
                finished={true}
            />
        ),
    },
};
