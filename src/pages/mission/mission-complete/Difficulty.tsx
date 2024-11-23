import { Avatar, Stack, Typography } from '@mui/material';
import bad from '@/assets/difficulty/bad.svg';
import normal from '@/assets/difficulty/normal.svg';
import good from '@/assets/difficulty/good.svg';

export interface IDifficultyProps {
    level: number;
}

const Difficulty = ({ level }: IDifficultyProps) => {
    const difficultyImage = [bad, normal, good];
    const difficultyText = ['좀 힘들었어요', '적당해요', '너무 쉬웠어요'];
    return (
        <Stack
            direction={'column'}
            alignItems={'center'}
            width={'5.125rem'}
            spacing={0.5}
        >
            <Avatar src={difficultyImage[level]} alt={difficultyText[level]} />
            <Typography variant={'body3Regular'} sx={{ wordBreak: 'keep-all' }}>
                {difficultyText[level]}
            </Typography>
        </Stack>
    );
};

export default Difficulty;
