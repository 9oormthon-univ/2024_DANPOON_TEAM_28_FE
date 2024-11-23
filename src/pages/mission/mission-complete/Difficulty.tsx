import { Avatar, Stack, Typography } from '@mui/material';
import bad from '@/assets/difficulty/bad.svg';
import normal from '@/assets/difficulty/normal.svg';
import good from '@/assets/difficulty/good.svg';
import bad_unselected from '@/assets/difficulty/bad_nonselected.svg';
import normal_unselected from '@/assets/difficulty/normal_nonselected.svg';
import good_unselected from '@/assets/difficulty/good_nonselected.svg';

export interface IDifficultyProps {
    level: number;
    selected: undefined | number;
}

const Difficulty = ({ level, selected }: IDifficultyProps) => {
    const difficultyImage = [good, normal, bad];
    const difficultyUnselected = [
        good_unselected,
        normal_unselected,
        bad_unselected,
    ];
    const difficultyText = ['너무 쉬웠어요', '적당해요', '좀 힘들었어요'];

    const imgSrc =
        level === selected || selected === undefined
            ? difficultyImage[level]
            : difficultyUnselected[level];
    return (
        <Stack
            direction={'column'}
            alignItems={'center'}
            width={'5.125rem'}
            spacing={0.5}
        >
            <Avatar src={imgSrc} alt={difficultyText[level]} />
            <Typography
                variant={'body3Regular'}
                sx={{ wordBreak: 'keep-all' }}
                color={selected === undefined ? '#000' : undefined}
            >
                {difficultyText[level]}
            </Typography>
        </Stack>
    );
};

export default Difficulty;
